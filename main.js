import {createElement, Component, render} from "./toy-react.js"

class MyComponent extends Component {
	render(){
		return(
			<div>
				<h1>my component</h1>
				{this.children}
			</div>
		);
	}
}



render(
	<MyComponent id="id" class="class">
		<div>2020</div>
		<div>2019</div>
		<div>2018</div>
	</MyComponent>,
	document.getElementById("app")
)