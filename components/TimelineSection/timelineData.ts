interface TimelineData {
  job: string,
  company: string,
  date: Date,
  paragraphs: string[];
}

export const timelineData: TimelineData[] = [
  {
    job: 'Software Engineering',
    company: 'AKMI Training Institute',
    date: new Date(2019, 10),
    paragraphs: [`
            After successfully completing a comprehensive two-year course on software engineering, I acquired a solid foundation in key programming languages, problem-solving techniques, networking fundamentals, database systems and software development methodologies.  
        `, `
            Throughout the course, I actively participated in various team projects, which not only allowed me to apply my technical knowledge but also helped me develop essential soft skills required in the tech industry.
        `
    ]
  },
  {
    job: 'IT Technical Support',
    company: 'ONEX Technology Systems & Business Solutions',
    date: new Date(2021, 12),
    paragraphs: [`
            My first tech job has been an incredible milestone in my career, providing me with a multitude of opportunities to learn and grow by collaborating with talented professionals. I had the privilege of being involved in projects that made a positive impact on society.
        `, `
            One such project involved managing the distribution of Android devices to COVID-19 vaccination centers, where I played a crucial role in ensuring that these centers were equipped with the necessary technology and technical support.
        `, `
            Additionally, I took responsibility for installing and maintaining deterrent parking sensors, which significantly improved pedestrian safety and accessibility. By preventing unauthorized parking, these sensors created a safer environment for both pedestrians and drivers alike.
        `]
  },
  {
    job: 'Quality Assurance Engineer',
    company: 'Atos Unify',
    date: new Date(2023, 3),
    paragraphs: [`
            Joining Atos Unify, a prominent telecom company, I had the opportunity of being introduced to the Agile methodology. It was another significant milestone that exposed me to the power of a collaborative approach in project management and development. Embracing Agile allowed me to witness firsthand significant enhancements to productivity.
        `, `
            During my time at Unify, I have immersed myself in the realm of software testing, a crucial aspect of the Agile development process. I became proficient in various testing techniques, including unit and end-to-end testing. With a keen eye for detail, identifying and resolving software defects efficiently became the area of my expertise.
        `]
  }
];
