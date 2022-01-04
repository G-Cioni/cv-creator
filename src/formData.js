import uniqid from 'uniqid';

const formData = {
  personalInfo: {
    formTitle: 'Personal Info',
    formType: 'personalInfo',
    formFields: {
      title: {
        name: 'title',
        placeHolder: 'Title',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      firstName: {
        name: 'firstName',
        placeHolder: 'First Name',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      lastName: {
        name: 'lastName',
        placeHolder: 'Last Name',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      email: {
        name: 'email',
        placeHolder: 'Email',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      phoneNumber: {
        name: 'phoneNumber',
        placeHolder: 'Phone Number',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      location: {
        name: 'location',
        placeHolder: 'Location',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      description: {
        name: 'description',
        placeHolder: 'Description',
        id: uniqid(),
        inputValue: '',
        type: 'textarea',
      },
    },
  },

  workExperiences: {
    formTitle: 'Work Experiences',
    formType: 'workExperiences',
    formFields: {
      position: {
        name: 'position',
        placeHolder: 'Position',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      company: {
        name: 'company',
        placeHolder: 'Company',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      city: {
        name: 'city',
        placeHolder: 'City',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      from: {
        name: 'from',
        placeHolder: 'From',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      to: {
        name: 'to',
        placeHolder: 'To',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
    },
  },
  education: {
    formTitle: 'Education',
    formType: 'education',
    formFields: {
      degree: {
        name: 'degree',
        placeHolder: 'Degree',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      school: {
        name: 'school',
        placeHolder: 'School',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      city: {
        name: 'city',
        placeHolder: 'City',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      from: {
        name: 'from',
        placeHolder: 'From',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
      to: {
        name: 'to',
        placeHolder: 'To',
        id: uniqid(),
        inputValue: '',
        type: 'input',
      },
    },
  },
};

export default formData;
