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
      },
      firstName: {
        name: 'firstName',
        placeHolder: 'First Name',
        id: uniqid(),
        inputValue: '',
      },
      lastName: {
        name: 'lastName',
        placeHolder: 'Last Name',
        id: uniqid(),
        inputValue: '',
      },
      email: {
        name: 'email',
        placeHolder: 'Email',
        id: uniqid(),
        inputValue: '',
      },
      phoneNumber: {
        name: 'phoneNumber',
        placeHolder: 'Phone Number',
        id: uniqid(),
        inputValue: '',
      },
      location: {
        name: 'location',
        placeHolder: 'Location',
        id: uniqid(),
        inputValue: '',
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
      },
      company: {
        name: 'company',
        placeHolder: 'Company',
        id: uniqid(),
        inputValue: '',
      },
      city: {
        name: 'city',
        placeHolder: 'City',
        id: uniqid(),
        inputValue: '',
      },
      from: {
        name: 'from',
        placeHolder: 'From',
        id: uniqid(),
        inputValue: '',
      },
      to: {
        name: 'to',
        placeHolder: 'To',
        id: uniqid(),
        inputValue: '',
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
      },
      school: {
        name: 'school',
        placeHolder: 'School',
        id: uniqid(),
        inputValue: '',
      },
      city: {
        name: 'city',
        placeHolder: 'City',
        id: uniqid(),
        inputValue: '',
      },
      from: {
        name: 'from',
        placeHolder: 'From',
        id: uniqid(),
        inputValue: '',
      },
      to: {
        name: 'to',
        placeHolder: 'To',
        id: uniqid(),
        inputValue: '',
      },
    },
  },
};

export default formData;
