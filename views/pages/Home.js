

const Home = {
  allowAccess: async () => true,
  render: async () => {
    const view = /*html*/ `
    <h3>Security Check Setup</h3>
    <p>Using the TradeStation Mobile app</p>
    <div id="summary">
    <p>When you login from an untrusted device instead of being asked to enter a 6-digit passcode you will simply need to approve the login request with a tap of your finger.</p>
    <p>Even better, when you log in to the mobile app on this device we will very the login request for you, which gives you the same extra security without the extra step.</p>
    <button type="button">Continue</button>
    <button type="button">Try another method</button>
    <form action="https://google.com">
    <input type="submit" value="Go to Google" />
</form>
    </div>    
    `;
    return view;
  },
  postRender: async () => {},
};

export default Home;
