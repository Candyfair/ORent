const nodemailer = require("nodemailer");
require('dotenv').config();




module.exports = async (request, response, next) => {

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'thelma.olson82@ethereal.email',
                pass: 'bh6beawDy9g6X4gKcx'
            }
        });
        console.log(`request.body : `, request.body)
        const { id, bookerid, bookername, bookeremail, startdate, enddate, images, propertyname, propertyslug, propertydescription, propertycapacity, propertybedroomscount, propertybathroomscount, propertytype, propertystreetnumber, propertystreetname, propertyzipcode, propertycity, propertycountry, propertyhost, porpertyhostemail} = request.body
        console.log(`jenvoie un mail au booker ${bookername} <${bookeremail}>: `)
        let messageToBooker = {
            to: `${bookername} <${bookeremail}>`,
            from: 'Orent <orent-booking@nodemailer.com>',
            subject: `Booking confirmed for your trip at ${propertyhost}'s ${propertytype} in ${propertycountry}`,
            html: `<p>Hello <b>${bookername}</b></p>
        <p>Thank you for booking with ORent for your next trip to ${propertyhost}'s ${propertytype} in ${propertycountry}</p>
        <p>You will receive an email from ${propertyhost} with all the information for the payment</p>
        <p>You can also directly contact ${propertyhost} by email ${porpertyhostemail}</p>
        <p>We wish you a wonderful trip! Encoy</p>`,
        }
        console.log(`jenvoie un mail à l'host ${propertyhost} <${porpertyhostemail}>: `)
        let messageToHost = {
            to: `${propertyhost} <${porpertyhostemail}>`,
            subject: `Your property was succesfullyBooked`,
            html: `<p>Hello<b>${propertyhost}</b></p>
        <p>We would like to advise that your property ${propertyname} in ${propertycity}, ${propertycountry} was booked </p>
        <p>Can you please send all the information to ${bookername} at ${bookeremail}</p>
        <p>We thank you for sharing your property with our customers!</p>`,
        }

        transporter.sendMail(messageToBooker, (error, info) => {
            if (error) {
                console.log('Error occurred');
                console.log(error.message);
                return process.exit(1);
            }
    
            console.log('Message sent successfully to booker!');
            console.log(nodemailer.getTestMessageUrl(info));
    
            // only needed when using pooled connections
            transporter.close();
        });

        transporter.sendMail(messageToHost, (error, info) => {
            if (error) {
                console.log('Error occurred');
                console.log(error.message);
                return process.exit(1);
            }
    
            console.log('Message sent successfully to host!');
            console.log(nodemailer.getTestMessageUrl(info));
    
            // only needed when using pooled connections
            transporter.close();
        });
        
        return

    } catch (error) {
        response.status(401).json(error.message);
        return
    }
}

