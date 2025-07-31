type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    image?: string; 
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Nasir Sharif Portfolio",
    fullName: "Nasir Sharif ",
    email: "nasirsharifqasoori786@gmail.com",
  },
  hero: {
    name: "Nasir Sharif",
    p: ["AI/ML & Cyber Security Enthusiast", "Red Teaming & SOC | Passion for Integrating AI and ML Concepts"],
  image: "\assets\linkdin pic.jpeg",  
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `II'm a passionate and driven cybersecurity enthusiast with hands-on experience in Red Teaming, SOC operations, and threat analysis. I actively work on diverse AI and Machine Learning projects,
                combining my technical knowledge with real-world problem-solving. With skills in tools like Python,
                I build secure, scalable solutions while continuously learning and exploring 
                the latest in security and intelligent systems. I'm always ready to collaborate on innovative ideas 
                that create real impact. Let’s work together to bring technology and security into action!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
