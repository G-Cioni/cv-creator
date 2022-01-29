import uniqid from 'uniqid';

localStorage.cvCreatorFormData =
  localStorage.cvCreatorFormData ??
  JSON.stringify({
    personalInfo: {
      formTitle: 'Personal Info',
      formType: 'personalInfo',
      formFields: {
        fullName: {
          name: 'fullName',
          placeHolder: 'Full Name',
          id: uniqid(),
          inputValue: '',
          type: 'input',
        },
        desiredRole: {
          name: 'desiredRole',
          placeHolder: 'Desired Role',
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

    contact: {
      formTitle: 'Contact Details',
      formType: 'contact',
      extraInputType: 'input',
      extraInputPlaceHolder: 'Website',
      extraInputName: 'website',
      formFields: {
        location: {
          name: 'location',
          placeHolder: 'Location',
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
        email: {
          name: 'email',
          placeHolder: 'Email',
          id: uniqid(),
          inputValue: '',
          type: 'input',
        },
      },
    },

    workExperiences: {
      formTitle: 'Work Experiences',
      formType: 'workExperiences',
      extraInputType: 'textarea',
      extraInputPlaceHolder: 'Extra Detail',
      extraInputName: 'extraDetail',
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
        workCity: {
          name: 'workCity',
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
      extraInputType: 'textarea',
      extraInputPlaceHolder: 'Extra Detail',
      extraInputName: 'extraDetail',
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
        educationCity: {
          name: 'educationCity',
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

    skills: {
      formTitle: 'Skills',
      formType: 'skills',
      extraInputType: 'input',
      extraInputPlaceHolder: 'Skill',
      extraInputName: 'skill',
      formFields: {},
    },

    certificates: {
      formTitle: 'Certificates',
      formType: 'certificates',
      extraInputType: 'input',
      extraInputPlaceHolder: 'Certificate',
      extraInputName: 'certificate',
      formFields: {},
    },

    languages: {
      formTitle: 'Languages',
      formType: 'languages',
      extraInputType: 'input',
      extraInputPlaceHolder: 'Language',
      extraInputName: 'language',
      formFields: {},
    },

    interests: {
      formTitle: 'Interests',
      formType: 'interests',
      extraInputType: 'input',
      extraInputPlaceHolder: 'Language',
      extraInputName: 'language',
      formFields: {},
    },
  });

const formData = JSON.parse(localStorage.cvCreatorFormData);
export default formData;
