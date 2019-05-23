/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import appStyles from './App.style.js';

function App() {
	return (
		<div css={ appStyles }>
			<div className="loginForm">
				<div className="container">
					<h2>Normal form</h2>
					
					<form>
						<fieldset>
							<div className="form-group">
								<label>Email:</label>
								<input placeholder="johndoe@fakemail.com	" type="email" className="form-control" />
							</div>
							<div className="form-group">
								<label>Password:</label>
								<input type="password" className="form-control" />
							</div>
							
							<div className="loginFormInfo">
								<div>
									<label>
										<input type="checkbox" /> Remember me
									</label>
								</div>
								
								<div>
									<a href="#">Forgot password?</a>
								</div>
							</div>
							
							<button type="submit">Login</button>
						</fieldset>
					</form>
					
					<p>Don't have an account? <a href="#">Sign up</a></p>
				</div>
			</div>
		</div>
	);
}

export default App;
