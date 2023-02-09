import sgMail from '@sendgrid/mail'

async function sendEmail(req, res) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

    const body = JSON.parse(req.body)
    console.log(body)

    const email = {
        to: 'smooth@smoothism.com',
        from: 'smooth@smoothism.com',
        subject: 'New Form submission from smoothism.com',
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
          <title>smoothism.com Form Submission</title>
          <meta name="description" content="smoothism.com from submission">
          <meta name="author" content="smoothism.com">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
          </head>
          
          <body>
            <h2>Message from ${body.name}</h2>
            <h2>Email: ${body.email}</h2>
            <h5>Message:</h5>
            <h3>${body.message}</h3>
          </body>
        </html>
        `
    }

    try {
        await sgMail.send(email)
    } catch (error) {
        console.log(error)
        return res.status(error.statusCode || 500).json({ error: error.message })
    }

    return res.status(200).json({ error: '' })
}

export default sendEmail