const mongoose = require('mongoose');
require('dotenv').config();

const regSchema = new mongoose.Schema({ name: String, email: String, phone: String, course: String, college: String, city: String, timestamp: Date, referralCode: String });
const paySchema = new mongoose.Schema({ name: String, email: String, phone: String, transactionId: String, course: String, planTitle: String, planAmount: String, timestamp: Date, referralCode: String });

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://bean-gate:beangate123@cluster0.p7xol.mongodb.net/beangate?retryWrites=true&w=majority&appName=Cluster0')
.then(async () => {
  const Reg = mongoose.model('Registration', regSchema);
  const Pay = mongoose.model('Payment', paySchema);
  
  const allPays = await Pay.find();
  
  // 1. Remove duplicate payments
  const seenTx = new Set();
  const toDelete = [];
  const uniquePays = [];
  for(const p of allPays) {
    if (seenTx.has(p.transactionId)) {
      toDelete.push(p._id);
    } else {
      seenTx.add(p.transactionId);
      uniquePays.push(p);
    }
  }
  
  if (toDelete.length > 0) {
    await Pay.deleteMany({ _id: { $in: toDelete } });
    console.log(`Deleted ${toDelete.length} duplicate payments.`);
  }

  // 2. Reconstruct missing registrations
  let addedRegs = 0;
  for(const p of uniquePays) {
    const existingReg = await Reg.findOne({ email: p.email });
    if (!existingReg) {
      await Reg.create({
        name: p.name,
        email: p.email,
        phone: p.phone,
        course: p.course,
        college: "N/A",
        city: "N/A",
        timestamp: p.timestamp,
        referralCode: p.referralCode
      });
      addedRegs++;
    }
  }
  
  console.log(`Restored ${addedRegs} missing registrations from payments.`);
  process.exit(0);
});
