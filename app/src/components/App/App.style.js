import { css } from '@emotion/core';

const bp = [480, 768];

const mq = bp.map(bp => `@media screen and ( max-width: ${ bp }px )`);

const appStyles = css`

a {
    text-decoration: none;
    color: rebeccapurple;
	-webkit-transition: all 0.2s ease-in 50ms;
	-o-transition: all 0.2s ease-in 50ms;
	transition: all 0.2s ease-in 50ms;
}
a:hover {
    color: magenta;
}

fieldset {
    border: 1px solid #DDDDDD;
    padding: 30px;
	background-color: #F0F0F0;

	${ mq[1] } {
        padding: 15px;
	}
}

.container {
    max-width: 500px;
	margin: 0 auto;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	
	${ mq[1] } {
        width: 83.33333333333333%; /*( 800px/960px ) 83.33333333333333 */
    }
}

h1 {
	font-size: 30px;
	margin-top: 30px;
	margin-bottom: 30px;
	width: 100%;
	text-align: center;
}

button {
    padding: 12px 24px;
	cursor: pointer;
	background-color: rebeccapurple;
	color: white;
	-webkit-transition: all 0.2s ease-in 50ms;
	-o-transition: all 0.2s ease-in 50ms;
	transition: all 0.2s ease-in 50ms;
	border: 1px solid rebeccapurple;
	border-style: none;
	border-radius: 3px;
	text-transform: uppercase;
	letter-spacing: 2px;
	
	${ mq[0] } {
	    width: 100%;
	}

    &:hover { color: magenta; background: white; border: 1px solid rebeccapurple; };
}

.loginForm {
    padding: 30px 0;
    
    h2,
    form {
        width: 100%;
    }

    .form-group {
        
        label,
        .form-control {
            width: 100%;
            display: block;
        }
        
        .form-control {
            margin: 12px 0;
            box-sizing: border-box;
            padding: 12px;
            border: 1px solid #DDDDDD;
        }   
    }
        
    button {
        margin-top: 10px;
        float: right;
        
    	${ mq[0] } {
            float: none;
    	}
    }
}

.loginFormInfo {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-direction: row;
	flex-wrap: no-wrap;
	justify-content: space-between;
	margin: 15px 0;
	font-size: 12px;
	
	input[type=checkbox] {
	    margin: 0;
	}
}

`

export default appStyles;