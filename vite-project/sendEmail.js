// sendEmail.js
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // Import cors

const app = express();
app.use(cors()); // Enable CORS
const upload = multer({ dest: 'uploads/' }); // Directory for uploaded files

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-email', upload.single('verificationFile'), (req, res) => {
    const { depositorName, amount } = req.body;
    const file = req.file;

    // Check if the file was uploaded
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    // Configure your email transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: 'harleyzain70@gmail.com', // Replace with your email
            pass: 'mlyf omty csiu jpth' // Replace with your email password or app password
        }
    });

    const mailOptions = {
        from: 'no-reply@yourdomain.com', // Replace with your email
        to: 'harleyzain70@gmail.com', // Replace with the recipient's email
        subject: 'New Deposit Submission',
        text: `Depositor Name: ${depositorName}\nAmount: ${amount}`,
        attachments: [
            {
                path: path.join(__dirname, file.path) // Path to the uploaded file
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
