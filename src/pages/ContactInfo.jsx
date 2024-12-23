import FormItem from "../components/FormItem";

const ContactInfo = ({ data, setData }) => {
  const { fullName, email, jobTitle, phoneNumber, location, linkedIn, github } =
    data;
  return (
    <div className="builder-section">
      <h1 className="builder-section-title">Contact Info</h1>
      <div className="some-container">
        <FormItem
          htmlFor="fullName"
          labelTxtContent="Full Name"
          placeHolder="please enter your full name"
          value={fullName}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
        <FormItem
          htmlFor="email"
          type="email"
          labelTxtContent="Email"
          placeHolder="please enter your email"
          value={email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div className="some-container">
        <FormItem
          htmlFor="jobTitle"
          type="text"
          labelTxtContent="Job Title"
          placeHolder="please enter your job title"
          value={jobTitle}
          onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
        />
        <FormItem
          htmlFor="phoneNumber"
          type="tel"
          labelTxtContent="Phone Number"
          placeHolder="please enter your phone number"
          value={phoneNumber}
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
        />
      </div>
      <FormItem
        htmlFor="location"
        type="text"
        labelTxtContent="Location"
        placeHolder="please enter your location"
        value={location}
        onChange={(e) => setData({ ...data, location: e.target.value })}
      />

      <div className="some-container">
        <FormItem
          htmlFor="linkedIn"
          type="text"
          labelTxtContent="Linked In"
          placeHolder="please enter your linked In profile link"
          value={linkedIn}
          onChange={(e) => setData({ ...data, linkedIn: e.target.value })}
        />
        <FormItem
          htmlFor="github"
          type="text"
          labelTxtContent="Github Link"
          placeHolder="please enter your github number"
          value={github}
          onChange={(e) => setData({ ...data, github: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
