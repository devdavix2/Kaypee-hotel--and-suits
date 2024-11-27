// script.js
document.getElementById('login-signup-button').addEventListener('click', () => {
    Swal.fire({
      title: 'Welcome',
      html: `
        <div id="button-group">
          <button id="show-login" class="gold-button">Login</button>
          <button id="show-signup" class="gold-button">Sign Up</button>
        </div>
        <div id="auth-forms" style="margin-top: 20px;">
          <div id="login-form">
            <h3>Login</h3>
            <input type="email" id="login-email" class="swal2-input" placeholder="Email">
            <input type="password" id="login-password" class="swal2-input" placeholder="Password">
          </div>
          <div id="signup-form" style="display: none;">
            <h3>Sign Up</h3>
            <input type="text" id="signup-username" class="swal2-input" placeholder="Username">
            <input type="email" id="signup-email" class="swal2-input" placeholder="Email">
            <input type="password" id="signup-password" class="swal2-input" placeholder="Password">
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      preConfirm: () => {
        const isLogin = document.getElementById('login-form').style.display !== 'none';
        if (isLogin) {
          const email = document.getElementById('login-email').value;
          const password = document.getElementById('login-password').value;
          if (!email || !password) {
            Swal.showValidationMessage('Please enter both email and password');
          }
          return { type: 'login', email, password };
        } else {
          const username = document.getElementById('signup-username').value;
          const email = document.getElementById('signup-email').value;
          const password = document.getElementById('signup-password').value;
          if (!username || !email || !password) {
            Swal.showValidationMessage('Please fill all fields');
          }
          return { type: 'signup', username, email, password };
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Form Data:', result.value);
        Swal.fire(`${result.value.type} successful`, JSON.stringify(), 'success');
      }
    });
  
    // Add event listeners to switch forms
    document.body.addEventListener('click', (e) => {
      if (e.target.id === 'show-login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
      } else if (e.target.id === 'show-signup') {
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
      }
    });
  });
  