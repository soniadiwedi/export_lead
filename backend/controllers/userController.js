const Lead = require("../models/userModel");
const CsvParser=require("json2csv").Parser;
exports.createLead=async(req,res)=>{
    try {
        const { name, email } = req.body;
        const newLead = new Lead({ name, email,address});
        await newLead.save();
    
        res.json({ success: true, message: 'Lead submitted successfully',newLead });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
}

exports.getLead=async(req,res)=>{
    try {
        const leads = await Lead.find();
        res.status(200).json({ success: true, leads });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
}

exports.exportLead=async(req,res)=>{
  try{
    let lead=[];
    let data=await Lead.find({})
    data.forEach((el)=>{
      const{id,name,email,address}=el
      lead.push({id,name,email,address})
    })
    const csvFields=["Id","Name","Email","Address"]
    const csvParser=new CsvParser({csvFields})
    const csvData=csvParser.parse(lead)
    res.setHeader("Content-Type","text/csv")
    res.setHeader("Content-Disaposition","attachment: filename=exportLead.csv")
    res.status(200).end(csvData)
  }catch(error){
    console.error(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

  