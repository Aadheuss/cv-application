import Input from "./input";

function PersonalInfo({ personalInfoInput }) {
  return (
    <div className="personal-info">
      <h1>Personal details</h1>
      <div>
        <Input
          id="name"
          placeholder="Alexander Kohler"
          text="Full Name"
          inputVal={personalInfoInput.value.name}
          onChangeHandler={(e) => personalInfoInput.onChange(e, "name")}
        />
      </div>
      <div>
        <Input
          id="email"
          placeholder="alexanderkohler@examplemail.com"
          text="Email"
          type="email"
          inputVal={personalInfoInput.value.email}
          onChangeHandler={(e) => personalInfoInput.onChange(e, "email")}
        />
      </div>
      <div>
        <Input
          id="tel"
          placeholder="+123456789"
          text="Phone number"
          type="tel"
          inputVal={personalInfoInput.value.phone}
          onChangeHandler={(e) => personalInfoInput.onChange(e, "phone")}
        />
      </div>
      <div>
        <Input
          id="address"
          placeholder="City, Country"
          text="Adress"
          inputVal={personalInfoInput.value.address}
          onChangeHandler={(e) => personalInfoInput.onChange(e, "address")}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
