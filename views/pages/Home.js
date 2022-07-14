let params = (new URL(document.location)).searchParams;
let state = params.get("state");
let url = "https://cmaheu-enterprise.us.auth0.com/continue"

console.log(url)

const Home = {
  allowAccess: async () => true,
  render: async () => {
    const view = /*html*/ `
    <h3>Auto Enrollment</h3>
    <p>Push Notifications via Mobile Device</p>
    <div id="summary">
    <p>Trade0 App requires multifactor authentication. Would you like to auto enroll your device as a secondary factor? </p>
    <p>If enabled, you will get push notifications directly on your device.</p>
    <form action=${url} >
    <input type="hidden" name="state" value=${state} /> 
    <input type="hidden" name="test" value="true" /> 
    <input type="submit" value="Continue" />
    </form>
    <form action=${url}>
    <input type="hidden" name="state" value=${state} /> 
    <input type="hidden" name="test" value="false" /> 
    <input type="submit" value="Try another method" />
    </form>
    </div>    
    `;
    return view;
  },
  postRender: async () => {},
};

export default Home;
