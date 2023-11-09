import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  tweetData = [
    {
      tweet:
        "I've been diving deep into Angular lately, and I'm amazed by its capabilities. Angular is a comprehensive front-end framework that provides a powerful toolset for building dynamic web applications. Its two-way data binding is a game-changer, making it easy to keep the UI and data in sync. The component-based architecture promotes reusability and maintainability. Angular also supports dependency injection, which is a fantastic feature for modular and testable code. The CLI (Command Line Interface) makes project setup and scaffolding a breeze. Angular is great for large-scale applications where organization and structure are crucial. The ecosystem includes a wide range of libraries and packages that can save you tons of development time.",
      date: '2023-10-20',
    },
    {
      tweet:
        "Angular's templating engine is versatile and supports features like conditionals and loops. You can easily create responsive designs with Angular's Flex Layout. RxJS integration allows for reactive programming, enabling efficient handling of asynchronous operations. Angular is a top choice for building Single Page Applications (SPAs) and Progressive Web Apps (PWAs). Its strong TypeScript integration ensures type safety and robust code. The Angular community is active, with many resources and support available. I'm excited about the future of Angular and can't wait to build more awesome applications with it!",
      date: '2023-10-19',
    },
    {
      tweet:
        "Angular has truly impressed me with its ability to handle complex data-driven applications. Routing in Angular is a breeze, and lazy loading modules optimizes performance. Form handling with Angular is robust and customizable, and it supports both template-driven and reactive forms. The Angular Material library provides a set of beautiful UI components that can be easily integrated into your projects. Angular's internationalization support makes it accessible to a global audience. Whether you're a beginner or an experienced developer, Angular offers a solid foundation for your web development journey.",
      date: '2023-10-18',
    },
    {
      tweet:
        "The ease of creating custom directives in Angular allows you to extend HTML's capabilities. Angular's testing tools make it easy to ensure the quality and reliability of your code. The framework's built-in error handling and debugging features simplify troubleshooting. With Angular Universal, server-side rendering is achievable, enhancing SEO and user experience. Angular is a versatile tool for building interactive dashboards, e-commerce platforms, and data-driven web applications. I'm excited about the future of Angular and the innovations it continues to bring to web development.",
      date: '2023-10-17',
    },
    {
      tweet:
        "Just attended an Angular meetup, and the community is vibrant and supportive. I met some amazing developers and had insightful discussions about Angular best practices. It's incredible how the Angular community shares knowledge and collaborates on open-source projects. The Angular team's commitment to continuous improvement is commendable, and it reflects in every release. Learning Angular has been an enriching experience, and I encourage developers to explore its capabilities and contribute to this thriving ecosystem.",
      date: '2023-10-16',
    },
  ];
}
