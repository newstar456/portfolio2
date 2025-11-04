// 'use client';

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import lightBulb from '/images/svgs/lightBulb.svg';

// export default function LightBulbContact() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
// <motion.div
//   {...({
//     className: "absolute right-16 bottom-36 inline-block w-24 md:hidden cursor-pointer",
//     whileHover: { scale: 1.1, rotate: 5 },
//     whileTap: { scale: 0.95, filter: "brightness(1.8)" },
//     onClick: () => setOpen(true),
//   } as React.ComponentProps<typeof motion.div>)}
// >

//         <motion.div
//           animate={{ filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
//         >
//           <Image
//             src={'/images/svgs/lightBulb.svg'}
//             alt="Send me a message!"
//             className="w-full h-auto drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]"
//             width={100}
//             height={100}
//           />
//         </motion.div>
//       </motion.div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>💬 Send me a message</DialogTitle>
//             <DialogDescription>
//               Have a question? Drop me a quick message!
//             </DialogDescription>
//           </DialogHeader>
//           <form action="https://formspree.io/f/mnnggbwn" method="POST" className="space-y-4" >
//             <Input name="name" placeholder="Your name" required />
//             <Input name="email" placeholder="Your email" type="email" required />
//             <Textarea name="message" placeholder="Your message..." required />
//             <Button type="submit" className="w-full">Send Message</Button>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
