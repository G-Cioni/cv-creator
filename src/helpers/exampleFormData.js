import uniqid from 'uniqid';
const exampleFormData = {
  [`personalInfo-${uniqid()}`]: {
    fullName: {
      name: 'fullName',
      id: uniqid(),
      inputValue: 'Mr. Mario Rossi',
      type: 'input',
    },
    desiredRole: {
      name: 'desiredRole',
      id: uniqid(),
      inputValue: 'Software Engineer',
      type: 'input',
    },
    description: {
      name: 'description',
      id: uniqid(),
      inputValue:
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.',
      type: 'textarea',
    },
  },

  [`contact-${uniqid()}`]: {
    phoneNumber: {
      name: 'phoneNumber',
      id: uniqid(),
      inputValue: '+1 202-555-0110',
      type: 'input',
    },
    email: {
      name: 'email',
      id: uniqid(),
      inputValue: 'john.smith@example.com',
      type: 'input',
    },
    location: {
      name: 'location',
      id: uniqid(),
      inputValue: 'New York, USA',
      type: 'input',
    },
    [`website-${uniqid()}`]: {
      name: 'website',
      id: uniqid(),
      inputValue: 'example.com/JohnSmith',
      type: 'input',
    },
    [`website-${uniqid()}`]: {
      name: 'website',
      id: uniqid(),
      inputValue: 'anotherexample.com/JohnSmith',
      type: 'input',
    },
  },

  [`workExperiences-${uniqid()}`]: {
    position: {
      name: 'position',
      id: uniqid(),
      inputValue: 'Software Engineer',
      type: 'input',
    },
    company: {
      name: 'company',
      id: uniqid(),
      inputValue: 'CirroStratus Inc.',
      type: 'input',
    },
    from: {
      name: 'from',
      id: uniqid(),
      inputValue: 'May 2016',
      type: 'input',
    },
    to: {
      name: 'to',
      id: uniqid(),
      inputValue: 'Present',
      type: 'input',
    },
    workCity: {
      name: 'workCity',
      id: uniqid(),
      inputValue: 'New York, USA',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue:
        'Engineered modern applications with Java, JavaScript, SQL Server, and No SQL.',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue:
        'Built innovative microservices and Web Services (incl. SOA/SOAP/REST/XML).',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue:
        'Utilized Cloud Foundry for efficient building on top of Kubernetes.',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue:
        'Efficiently deployed and integrated software engineered by team and updated integration/deployment scripts to improve continuous integration practices.',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue:
        'Liaised with Product Managers to identify minimum viable product requirements and clearly defined feature sets into well-scoped user stories for individual team members.',
      type: 'input',
    },
  },
  [`workExperiences-${uniqid()}`]: {
    position: {
      name: 'position',
      id: uniqid(),
      inputValue: 'Software Engineer Intern',
      type: 'input',
    },
    company: {
      name: 'company',
      id: uniqid(),
      inputValue: 'Kell Tech',
      type: 'input',
    },
    from: {
      name: 'from',
      id: uniqid(),
      inputValue: 'September 2015',
      type: 'input',
    },
    to: {
      name: 'to',
      id: uniqid(),
      inputValue: 'May 2016',
      type: 'input',
    },
    workCity: {
      name: 'workCity',
      id: uniqid(),
      inputValue: 'New York, USA',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue: 'Supported Kell Tech’s testing and engineering processes.',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue: 'Confirmed that completed software met client requirements.',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue: 'Completed maintenance on existing programs.',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue:
        'Worked closely with product team on scope of future projects and innovations.',
      type: 'input',
    },
    [`extraDetail-${uniqid()}`]: {
      name: 'extraDetail',
      id: uniqid(),
      inputValue:
        'Carried out continuous identification, measurement, and improvement of processes.',
      type: 'input',
    },
  },

  [`education-${uniqid()}`]: {
    degree: {
      name: 'degree',
      id: uniqid(),
      inputValue: 'High School Diploma',
      type: 'input',
    },
    school: {
      name: 'school',
      id: uniqid(),
      inputValue: 'New York Solebury High School',
      type: 'input',
    },
    from: {
      name: 'from',
      id: uniqid(),
      inputValue: 'September 2011',
      type: 'input',
    },
    to: {
      name: 'to',
      id: uniqid(),
      inputValue: 'June 2015',
      type: 'input',
    },
    educationCity: {
      name: 'educationCity',
      id: uniqid(),
      inputValue: 'New York, USA',
      type: 'input',
    },
  },

  [`skills-${uniqid()}`]: {
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'React.js',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'Javascript',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'HTML',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'CSS',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'NPM',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'Linux terminal',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'NPM',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'Algorithmic thinking',
      type: 'input',
    },
    [`skill-${uniqid()}`]: {
      name: 'skill',
      id: uniqid(),
      inputValue: 'Webpack',
      type: 'input',
    },
  },
  [`certificates-${uniqid()}`]: {
    [`certificate-${uniqid()}`]: {
      name: 'certificate',
      id: uniqid(),
      inputValue: 'Microsoft Office Specialist',
      type: 'input',
    },
    [`certificate-${uniqid()}`]: {
      name: 'certificate',
      id: uniqid(),
      inputValue: 'CCDH',
      type: 'input',
    },
  },
  [`languages-${uniqid()}`]: {
    [`language-${uniqid()}`]: {
      name: 'language',
      id: uniqid(),
      inputValue: 'English: Native',
      type: 'input',
    },
    [`language-${uniqid()}`]: {
      name: 'language',
      id: uniqid(),
      inputValue: 'Spanish: Good',
      type: 'input',
    },
    [`language-${uniqid()}`]: {
      name: 'language',
      id: uniqid(),
      inputValue: 'Japanese: Basic',
      type: 'input',
    },
  },
};

export default exampleFormData;
