import nodemailer from 'nodemailer';

export async function POST(req) {
try{
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS,
    },
  });
  const mailOptions = {
    from: email, 
    to: 'synergycorp855@gmail.com', 
    subject: `New message from ${name}`,
    text: message,
  };

    await transporter.sendMail(mailOptions); 
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending mail:', error)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}