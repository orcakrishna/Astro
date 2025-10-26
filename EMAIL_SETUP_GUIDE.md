# 📧 Email Setup Guide for Contact Form

## ✅ Current Solution: Mailto Link (Working Now!)

The contact form now uses a **mailto link** - the most reliable method that works immediately without any setup!

### How It Works:
1. User fills the contact form
2. Clicks "Send Message"
3. **Their default email client opens** (Gmail, Outlook, etc.)
4. Email is **pre-filled** with all form data
5. User clicks "Send" in their email client
6. Email arrives at **astrovidyashukla@gmail.com**

### ✅ Advantages:
- **Works immediately** - No setup required
- **No external services** - No timeouts or failures
- **100% reliable** - Always works
- **No verification needed**
- **Free forever**

## 🚀 Optional: Automatic Email with EmailJS

If you want **automatic email sending** (no user email client required), follow these steps:

### EmailJS Setup Steps:

1. **Go to:** https://www.emailjs.com/
2. **Sign up** (free account)
3. **Add Email Service:**
   - Go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail"
   - Connect your Gmail (astrovidyashukla@gmail.com)
4. **Create Email Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:
   ```
   Subject: New Contact from AstroVidya
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Service: {{service}}
   Message: {{message}}
   ```
5. **Get Your Keys:**
   - Go to "Account" → "General"
   - Copy your **Public Key**
   - Copy your **Service ID**
   - Copy your **Template ID**
6. **Update index.html:**
   - Replace `YOUR_PUBLIC_KEY` with your actual public key
7. **Update script.js:**
   - Add EmailJS send code (instructions provided)

### After EmailJS Setup:
- ✅ All form submissions will go to `astrovidyashukla@gmail.com`
- ✅ Sender will receive auto-response: "Thank you for contacting AstroVidya! We will get back to you soon."
- ✅ Emails will have professional table format with all form data
- ✅ No captcha required
- ✅ Works forever, no maintenance needed

### Email Will Contain:
- **Name**: Customer's name
- **Email**: Customer's email
- **Phone**: Customer's phone number
- **Service**: Selected service (Kundali/Marriage/Birth Chart/Job-Career)
- **Message**: Customer's message/query

## Testing:
1. Go to your website
2. Scroll to "Get in Touch" section
3. Fill the form completely
4. Click "Send Message"
5. Check `astrovidyashukla@gmail.com` inbox

## Troubleshooting:

### If email doesn't arrive:
1. **First submission?** Check inbox for verification email
2. **Check spam folder** in Gmail
3. **Wait 1-2 minutes** for email delivery
4. **Verify form is filled completely** - all fields are required

### Form Fields (All Required):
- ✅ Name
- ✅ Email
- ✅ Phone
- ✅ Service (must select from dropdown)
- ✅ Message

## Service Provider:
- **Provider**: FormSubmit.co
- **Cost**: FREE forever
- **Reliability**: High (used by thousands of websites)
- **No backend needed**: Works directly from HTML form

---

**After first verification, everything works automatically!** 🎉
