import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = ()=>{
     const {toast} = useToast()
     const [isSubmitting, setIsSubmitting] = useState(false)
     const [formData, setFormData] = useState({
       name: "",
       email: "",
       message: "",
     })

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
          toast({
            title: "Missing details",
            description: "Please fill in your name, email, and message before sending.",
          })
          return
        }

        setIsSubmitting(true)

        const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )

        window.location.href = `mailto:mahhibhatt2004@gmail.com?subject=${subject}&body=${body}`

        setTimeout(() => {
          toast({
            title:"Your email app is opening!",
            description:"Your message has been prepared. Send it from your mail app to finish contact."
          })
           setIsSubmitting(false)
           setFormData({ name: "", email: "", message: "" })
        }, 500)
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary ">Touch
    </span></h2>

    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
    I'm keen to grow professionally and contribute meaningfully in this field. Please feel free to get in touch for collaboration, opportunities, or further discussion.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
       <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

       <div className="space-y-6">
         <div className="flex items-start gap-4 p-3 rounded-lg bg-card/60 border border-border/60 w-full max-w-md">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
             <Mail className="h-6 w-6 text-primary" />{" "}
            </div>
            <div className="min-w-0">
              <h4 className="font-medium text-left">Email</h4>
              <a href="mailto:mahhibhatt2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                mahhibhatt2004@gmail.com
              </a>
            </div>
         </div>
       
       <div className="flex items-start gap-4 p-3 rounded-lg bg-card/60 border border-border/60 w-full max-w-md">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
             <Phone className="h-6 w-6 text-primary" />{" "}
            </div>
            <div className="min-w-0">
              <h4 className="font-medium text-left">Phone</h4>
              <a href="tel:+919428060490" className="text-muted-foreground hover:text-primary transition-colors">
                +91 94280 60490
              </a>
            </div>
         </div>

         <div className="flex items-start gap-4 p-3 rounded-lg bg-card/60 border border-border/60 w-full max-w-md">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
             <MapPin className="h-6 w-6 text-primary" />{" "}
            </div>
            <div className="min-w-0">
              <h4 className="font-medium text-left">Location</h4>
              <p className="text-muted-foreground">
                Ahmedabad, Gujarat
              </p>
            </div>
         </div>
       </div>

     <div className="pt-8">
       <h4 className="font-medium mb-4">Connect With Me
       </h4>
       <div className="flex space-x-4 justify-center">
        <a href="https://www.linkedin.com/in/mahhi-bhatt" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
        </a>
       </div>
     </div>
    </div>

    <div className="bg-card p-8 rounded-lg shadow-xs">
        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
         <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">{" "}Your Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
         </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">{" "}Your Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your.email@example.com" />
         </div>

            <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">{" "}Your Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about...." />
         </div>

         <button type="submit" 
         disabled = {isSubmitting}
         className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
           { isSubmitting ? "Opening Mail...": "Send Message" } 
          <Send size={15}/>
         </button>
        </form>
      </div>

    </div>
  </div>
</section>
}