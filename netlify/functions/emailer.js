const { SendMailClient } = require("zeptomail");

exports.handler = async (event) => {
    const { name, email, service, message } = JSON.parse(event.body);

    const client = new SendMailClient({
        url: "https://api.zeptomail.in/",
        ZEPTO_TOKEN: process.env, // Replace with your token
    });

    try {
        await client.sendMail({
            from: { address: "noreply@twamevdental.com", name: "Twamev Dental Clinic" },
            to: [
                {
                    email_address: {
                        address: "dr.amanraj@twamevdental.com",
                        name: "Dr. Aman Raj",
                    },
                },
            ],
            subject: `Request for Appointment from ${name}`,
            htmlbody: `
                <div>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Service: ${service}</p>
                    <p>Message: ${message}</p>
                </div>
            `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully." }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email." }),
        };
    }
};
