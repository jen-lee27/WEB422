import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'talent_hub';

  names = [
    'Steve Jobs',
    'Bill Gates',
    'Jeff Bezos',
    'Elon Musk',
    'Warren Buffet',
  ];

  jobs = [
    'Data Scientist',
    'ML Engineer',
    'Front End Developer',
    'Java Developer',
    'Database Admin',
  ];

  rates = [
    '$100 - 120/hr',
    '$150 - 175/hr',
    '$80 - 90/hr',
    '$110 - 120/hr',
    '$70 - 80/hr',
  ];

  images = [
    '../assets/images/1.jpg',
    '../assets/images/2.jpg',
    '../assets/images/3.jpg',
    '../assets/images/4.jpg',
    '../assets/images/5.jpg',
  ];

  bios = [
    "I am a dynamic and innovative Data Scientist, is at the forefront of the digital age, utilizing their extensive skill set to extract actionable insights from complex data landscapes. With a passion for numbers and an insatiable curiosity, I has become a driving force in the world of data analytics. Born 1970, I demonstrated an early aptitude for mathematics and computer science, which led them to pursue a Bachelor's degree in Computer Science. They quickly distinguished themselves as a top student, earning scholarships and awards for their academic excellence. After completing their undergraduate studies, I continued their academic journey with a Master's degree in Data Science, cementing their expertise in this rapidly evolving field. My professional journey started at Apple, where I honed my skills and developed a strong foundation in data analysis. My remarkable ability to uncover hidden patterns and make data-driven decisions soon led to promotions and leadership roles. As a Senior Data Scientist I have spearheaded numerous projects, driving innovation and delivering substantial results. I am an influential figure, contributing profoundly to the growth and development of the field.",
    "I am a passionate and forward-thinking Machine Learning Engineer, dedicated to harnessing the power of artificial intelligence to drive innovation and solve complex problems. From a young age, I was drawn to the allure of technology and the potential it held, which eventually led me to pursue a career in machine learning. My journey began with a Bachelor's degree in Computer Science, where I developed a strong foundation in mathematics, programming, and data analysis. It was during this time that I discovered my affinity for machine learning and its real-world applications. After completing my undergraduate studies, I embarked on a mission to further my knowledge by pursuing a Master's degree in Machine Learning and Artificial Intelligence. This advanced education equipped me with the skills and expertise required to tackle intricate challenges in the field. I've had the privilege of working with cutting-edge companies, where I've not only implemented state-of-the-art machine learning algorithms but also devised novel solutions that have made a substantial impact. Whether it's optimizing recommendation systems, enhancing natural language processing models, or improving computer vision applications, I thrive on pushing the boundaries of what AI can achieve. Beyond my professional endeavors, I'm a strong advocate for the responsible and ethical use of AI. I believe that the true power of machine learning lies not just in its capabilities but in its potential to make the world a better place. This philosophy drives me to continuously expand my knowledge and seek out projects that align with this vision. As a Machine Learning Engineer, I am committed to pushing the boundaries of technology and using AI to solve real-world problems, all while upholding the principles of ethics and responsible innovation. The future of AI is an exciting journey, and I am eager to be a part of it.", 
    "As a Front End Developer, I am passionate about crafting the digital experiences that bring websites and applications to life. With a keen eye for design and a deep understanding of coding, I'm dedicated to making the web not only functional but also visually captivating. My journey in web development began when I discovered my fascination with the intersection of design and technology. Armed with a Bachelor's degree in Computer Science and a creative spirit, I embarked on a quest to bridge the gap between aesthetics and functionality. I've honed my skills over the years, mastering the languages of the web, including HTML, CSS, and JavaScript. My commitment to creating seamless, user-friendly interfaces has driven me to stay on the cutting edge of the ever-evolving front end development landscape. Whether it's building responsive websites, optimizing user experiences, or ensuring cross-browser compatibility, I thrive on transforming ideas into visually stunning, interactive digital realities. Throughout my career, I've collaborated with diverse teams and clients, translating their visions into pixel-perfect, user-centric designs. I take pride in my ability to keep pace with the latest trends in web development, embracing new frameworks and tools that enhance the capabilities of the front end. My journey as a Front End Developer is a continuous quest for excellence, driven by the belief that the user interface is the face of every digital product. With a commitment to creating visually engaging, intuitive, and dynamic web experiences, I'm excited to be part of the ever-evolving world of front end development.",
    "As a Java Developer, I am driven by a deep passion for coding and problem-solving. My journey in the world of software development began with an insatiable curiosity for technology and a Bachelor's degree in Computer Science, where I initially encountered the powerful language of Java. Java has been the cornerstone of my career, and I've dedicated myself to mastering it inside and out. I find the language's versatility, performance, and scalability simply fascinating. Over the years, I've had the privilege of working on a wide range of projects, from enterprise-level applications to Android mobile apps. I take pride in writing clean, efficient, and maintainable code, and I'm a firm believer in the 'write once, run anywhere' philosophy that Java embodies. In addition to my technical prowess, I've developed strong problem-solving skills and the ability to work effectively in collaborative environments. I've been an integral part of teams that have successfully delivered software solutions that have made a real impact. My journey as a Java Developer is a constant pursuit of excellence in software craftsmanship. I'm thrilled to be part of an ever-evolving field, and I'm excited to tackle new challenges, explore emerging technologies, and continue to refine my Java expertise. My commitment to creating robust and efficient software is unwavering, and I'm eager to contribute to the dynamic world of software development.",
    "As a seasoned Database Administrator, my career is defined by a relentless dedication to managing and optimizing data systems. I've always been captivated by the intricate world of databases, and my journey into this field began with a strong foundation in Computer Science. My extensive experience in database management spans over a decade. Throughout my career, I've been entrusted with the critical responsibility of ensuring data integrity, security, and accessibility. Whether it's working with SQL databases, NoSQL databases, or cloud-based solutions, I've consistently demonstrated an aptitude for fine-tuning database performance, streamlining queries, and implementing robust backup and recovery strategies. My expertise extends to data modeling, database design, and ETL processes. I thrive on maintaining the delicate balance between system stability and optimal performance, all while staying attuned to industry best practices and emerging technologies. I've played a pivotal role in organizations of various sizes, from startups to multinational corporations, ensuring that their data infrastructure runs seamlessly. My problem-solving skills, attention to detail, and the ability to adapt to evolving data landscapes have allowed me to provide innovative solutions for complex data challenges. My journey as a Database Administrator is marked by a commitment to data reliability and security. I'm excited to continue contributing to this dynamic field, keeping databases efficient, reliable, and prepared for the ever-increasing demands of the data-driven world.",
  ];

}
