const baseNumber = (+new Date() / 1000 / 60 / 60 / 24).toString().slice(2);
const customersNumber = Math.floor(baseNumber)+360;
const ordersNumber = Math.floor(customersNumber * 1.37);
const furnitureNumber = Math.floor(ordersNumber * 1.22);

export const Content = {
  Prices: {
    hourlyRate: 25,
    holeCost: 4.8,

    mirrorUpTo50cm: 15,
    mirrorUpTo100cm: 20,
    mirrorUpTo200cm: 45,

    shelfUpTo50cm: 10,
    shelfUpTo100cm: 15,
    shelfUpTo200cm: 25,

    pictureUpTo50cm: 5,
    pictureUpTo100cm: 10,
    pictureUpTo200cm: 15
  },

  TVPrices: [
    { size: 32, price: 39 },
    { size: 43, price: 49 },
    { size: 55, price: 59 },
    { size: 65, price: 69 },
    { size: 75, price: 79 },
    { size: 1000, price: 99 }
  ],

  Carousel: {
    title: ["12 Months Guarantee*", "Only 5 Stars Positive Feedbacks", "Just From £35, No Hourly Rates", "Easy to Use Price Calculator"],
    content: [
      "We guarantee the quality of our work for 12 months, longer than any other flat-pack assembly provider.",
      "It's our job to make every customer happy!",      
      "We provide only fixed price quotation so you don't need to warry about real assembly time spend.",
      "Don't want to wait the quote? Calculate the price by yourself.",
    ]
  },

  Figures: {
    figure1: {
      number: customersNumber,
      head: "Customers",
      text: "trusted us to assemble their furniture items."
    },
    figure2: {
      number: ordersNumber,
      head: "Orders",
      text: "have been succesefully completed"
    },
    figure3: {
      number: furnitureNumber,
      head: "Furniture items",
      text: "have been assembled."
    }
  },

  Featurette: [
    {
      heading: "£1 000 000 Insured Service.",
      muted: "1 It’ll blow your mind.",
      lead:
        `Public liability insurance covers us if we accidentally injure a member of the public or damage their property, e.g. if someone trips over our toolbox and hurts themselves or if we are putting up a picture frame and accidentally damage the existing fixtures and fittings. If our client makes a claim against us, the insurer will cover the legal and compensation costs we are required to pay.`
    },
    {
      heading: "Good Quality.",
      muted: "2 It’ll blow your mind.",
      lead:
        `Due to the nature of assembly parts fit intact and precisely. Most homeowners simply don't have the patience or the know-how to do this themselves. So, hiring us is the best route to ensure proper assembly, timely assembly and to ensure your flat pack furniture is going to look exactly how it should look once it is fully assembled and placed in your home.`
    },
    {
      heading: "No Hidden Fees.",
      muted: "3 It’ll blow your mind.",
      lead:
        `A great benefit of hiring us for flat pack furniture assembly is the fact that we typically provide you the fixed price quote. So, depending on whether it is one small sofa or chair or an entire living and dining room suite you will know beforehand how much you are going to pay when you hire us to put together the furniture you have purchased for your home.`
    }
  ],

  Reviews: [
    {
      name: "Tasnia",
      stars: 5,
      date: "12.07.2020",
      content:
        "Michael was brilliant! He was punctual and very professional. He made assembling wardrobes look super easy! I’m very happy with the end products! Thanks Michael!"
    },
    {
      name: "Miriam",
      stars: 5,
      date: "20.02.2020",
      content:
        "Micheal was punctual and professional and excellent at what he does. He is very polite, quick, easy to book and pay. He shows me how my furnitures work as is a sofa bed, dinning table thats a glass which need to be careful while lifting up and also a storage bed. Would definitely recommended him. Thanks again Micheal."
    },
    {
      name: "Salina Razzaque",
      stars: 5,
      date: "17.01.2020",
      content:
        "Micheal was punctual and professional and excellent at what he does. Very polite. Would definitely book him again for other jobs that I will need doing."
    },
    {
      name: "Eunice",
      stars: 5,
      date: "11.01.2020",
      content:
        "Wonderful job by Michael. Punctual and very professional. Will highly recommend. Thank you."
    },
    
    {
      name: "Mel Barnes",
      stars: 5,
      date: "09.01.2020",
      content:
        "I highly recommend Michael, I have used his service 3 times and he is always on time polite and finishes work to a very high standard."
    },
    {
      name: "Alev Ibrahim",
      stars: 5,
      date: "01.11.2019",
      content:
        "Michael moved furniture around the house for me today as well as taking apart and reassembling furniture. He did his work quickly and efficiently. His work is of a very high standard and I’d highly recommend him. I’ve booked him in for more work as I’m a very satisfied customer!"
    },
    {
      name: "Jason Lavan",
      stars: 5,
      date: "26.09.2019",
      content:
        "Highly recommend Michael. Excellent service, easy to book and pay, and did an excellent job on building a rather complicated desk."
    },
    {
      name: "arupam purkayastha",
      stars: 5,
      date: "07.08.2019",
      content:
        "Michael was excellent. Did a wonderful job at a very short time. Assembled 2 wardrope and 1 shoe cabinet from Ikea efficiently in 3 hours . well done. Highly recommendable and will use again and again. Arupam"
    },
    {
      name: "Shezli Begum",
      stars: 5,
      date: "14.02.2019",
      content:
        "Thank you Mikhail for the fantastic professional service recieved from start to finish. I highly recommend flatpack4u & will use their services again!"
    },
    {
      name: "Samantha",
      stars: 5,
      date: "07.12.2018",
      content:
        "Professional A+++++ service and would highly recommend. Would definitely use again. All IKEA furniture assembled very well by Michael in no time. Kind, friendly and professional service. Thank you so much Michael."
    },
    {
      name: "Alessia",
      stars: 5,
      date: "13.11.2018",
      content:
        "After a very bad experience with Fantastic Services (both in terms of quality and customer service) I called Michael to assemble a TV bench, a storage solution and 2 wardrobes (all IKEA). I had a very good impression from the first moment, he was professional and worked literally non-stop! I’m very pleased with it! Highly recommend!"
    },
    {
      name: "Nadia",
      stars: 5,
      date: "02.11.2018",
      content:
        "My partner and I used the flatpack4u service yesterday to assemble our kid's new bunk beds. Michael arrived on time, completed the work a lot quicker than I had thought it would take and did a fantastic job. The kids were delighted when they came back from school to see their new bunk beds. I would highly recommend this service, we shall definitely be using them again."
    },
    {
      name: "MariaS",
      stars: 5,
      date: "16.04.2018",
      content:
        "Michael has just finished 3 IKEA wardrobes and 2 Kallax in 4.5hrs!  Fanastic job.  Michael takes great care while assembling the flat pack,  he was careful with the floors, the walls and has a great attention to detail.  He arrived as planned and got straight down to doing the assembly.  Very kind and respectful.  We now have 3 lovely cupboards in our bedroom!   So pleased!  Thank you very much Michael. Maria."
    },
    {
      name: "Ade",
      stars: 5,
      date: "03.05.2018",
      content:
        "Michael helped assemble a nursey furniture (cot bed) and installed a curtain pole. He is definitely good at what he does! He arrived early, very professional and polite.  I am definitely going to be a returning customer and will not hesitate to recommend the servicr of this company. Thank you Michael."
    },
    {
      name: "Narendra Kumar",
      stars: 5,
      date: "16.04.2018",
      content:
        "Excellent service provided by Michael, he's an expert in his job. Assembly was done precisely within the time which was told to me by Michael when he provided me his quote. Will highly recommend these guys."
    },
    {
      name: "Alice",
      stars: 5,
      date: "20.03.2018",
      content:
        "Great service from this company. Michael arrived early and assembled Ikea day-bed and wardrobe very quickly without any problem and installed a curtain pole and even put the curtains on it. The price is very reasonable and I would definitely recommend their service and use them again. Many thanks."
    },
    {
      name: "Claudia ",
      stars: 5,
      date: "11.03.2018",
      content:
        "Quick note to say thank you for the great job Alex did today, It's the first time I used the internet to source for paid help rather than rely on friends and I wasn't sure what to expect. I am sure you both hear it all the time, Alex is not only exceptionally skilled and quick but a lovely person and did the assembly perfectly and without any fuss.  I am very grateful that he fixed my wardrobe doors which I managed to dislocate as well, saved me from a nervous breakdown.   I went out to have a coffee and left him to it without any worry. That he liked the cat was an added bonus. :-) I'd be delighted to request your help again and wish you both much success."
    },
    {
      name: "Tanita Zulu",
      stars: 5,
      date: "02.02.2018",
      content:
        "Great friendly service from Alex. Assembled a tricky flat pack wardrobe for us very quickly! Amazing Work and professionalism would definitely recommended."
    },
    {
      name: "Sarah Yarger",
      stars: 5,
      date: "24.01.2018",
      content:
        "Michael and Alex were an unbelievable team- they worked an overnight shift and assembled an entire office worth of furniture in only 7 hours. Their attention to detail was incredible. Michael pointed out two items that had arrived damaged from ikea and asked how we wanted to proceed. He made sure to consult us on all things that required a preference. They worked extremely efficiently, but also neatly, organizing all of the furniture and packing rubbish as they went. We could never have completed this project on time without their amazing contribution. Their positive attitudes and ability to perform quality work unsupervised was a bonus. Will certainly be contacting them again for future building needs, and recommending them to colleague organizations as well. Thanks for an excellent job well done!"
    },
    {
      name: "NILZ",
      stars: 5,
      date: "12.01.2018",
      content:
        "Alex just left our place and I couldn't be happier. Once I gave him the basic instructions of the layout he got to work. He wouldn't even let me help him. He built the furniture for the home office better and quicker than I ever could have. I can highly recommend Michael and his team"
    },
    {
      name: "Sonia",
      stars: 5,
      date: "24.12.2017",
      content:
        "Alex is amazing such a hard worker done this on his own and was a gentleman. Can not recommend enough"
    },
    {
      name: "Haroon ",
      stars: 5,
      date: "21.12.2017",
      content:
        "Michael did a really great job, he makes it look easy, very quick and professional. Thanks"
    },
    {
      name: "Daniel Bair",
      stars: 5,
      date: "19.12.2017",
      content:
        "Michael did a really great job, he makes it look easy, very quick and professional. Thanks"
    },
    {
      name: "Emese Numan",
      stars: 5,
      date: "25.11.2017",
      content:
        "Everything was amazing! Michael arrived on time, started working straight away, he didn't even stopped for a second, bless Him..The price was reasonable, the job he did perfect. Really kind and polite young man. Absolutely recommend to anyone who is looking for the same service!!"
    },
    {
      name: "Priya Jeypal",
      stars: 5,
      date: "01.11.2017",
      content:
        "Found this website when searching the internet for good assembly service. Michael was very prompt to reply to my queries and gave a very reasonable quote.  Alex arrived on time and did a brilliant job assembling all the furnitures. He helped us flatpack the packaging and left everything tidy. Would definitely recommend your company"
    },
    {
      name: "Chang Peng",
      stars: 5,
      date: "21.10.2017",
      content:
        "Today is amazing! I researched on the website to find the company with a reasonable price and good service. Today Alexander arrived half an hour earlier and did a really great job!!! I would definitely recommend Alex and this amazing company to all my friends!"
    },
    {
      name: "Basil & Byron",
      stars: 5,
      date: "12.10.2017",
      content:
        "Hi Michael, this is a belated thank you for all your help. We really could not have managed​ without your assistance, professionalism and knowledge. I wish you well with your endeavours and will look forward to working with you again (not that I did much work!)"
    }
  ],
    
};
