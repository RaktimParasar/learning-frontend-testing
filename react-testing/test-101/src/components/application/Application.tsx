export const Application = () => {
  return (
    <>
      <h1>Job Description Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <img src="https://picsum.photos/200/300" alt="a random pixel" />
      <span title="close">X</span>
      <div data-testid="custom html element">CUSTOM HTML ELEMENT</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullname"
            value="Raktim"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Description</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  )
}
