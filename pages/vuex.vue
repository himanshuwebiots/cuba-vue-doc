<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Vuex.</h4>
		</div>
		<div class="card-body p-t-0">
			<p>
				There are many situations where we want a global variable, to access it
				anywhere in our code in any file, and we also want to make changes to
				that global variable and reflect the changes wherever that variable is
				used.
			</p>
			<p>
				To achieve this we can use vuex. It is a state management system which
				helps with the above problem.
			</p>

			<h4 class="sub-title" id="vuexSetup">Vuex Setup:</h4>
			<p>
				1. First we install vuex in our project by running the following command
				in the terminal
			</p>
			<div class="py-2 ps-3">
				<div class="code-box-copy">
					<codeBox :code="prismCodes.installVuex" />
				</div>
			</div>
			<p>
				2. Now we create a folder inside src folder named
				<strong>store</strong>. Inside that we make a new file named
				<strong>index.js</strong>. Here we will setup our global store.
			</p>
			<p>
				Below given if the minimum code you require to setup your vuex store.
			</p>
			<div class="py-2 ps-3">
				<div class="code-box-copy">
					<codeBox :code="prismCodes.setupStore" />
				</div>
			</div>
			<p>
				There are 4 main parts of a store: state, getters,actions and mutations.
			</p>
			<h5 class="inner-sub-title" id="vuexState">State</h5>
			<p>Here we store the initial values of the global variables.</p>
			<h5 class="inner-sub-title" id="vuexGetters">Getters</h5>
			<p>
				They are the way for us to access the modified values of the initial
				variables we have store. Lets say we have stored initial data in the
				state and later we need to apply some filters on it and then access it
				globally, we can do that with the help of getters.
			</p>
			<h5 class="inner-sub-title" id="vuexActions">Actions</h5>
			<p>
				They are responsible for triggering any changes we can to make in the
				state. We create the logic to modify or manipulate the payload we get
				from the dispatch action and send that data to mutations to make changes
				in the state.
			</p>
			<h5 class="inner-sub-title" id="vuexMutations">Mutations</h5>
			<p>
				They are triggered inside the actions through commit function. Inside
				Mutations we make changes in the state variables. Although state
				variables can be modified from getters as well as actions but it is a
				good practise to modified the state from within the mutations, so that
				if there are any modifications required in state we can just go through
				the mutations and apply the modifications easily.
			</p>

			<p>
				As the project grows,it becomes difficult for the programmers to write
				code for every functionality inside one file. So there is a way to get
				arround it. We can create separate modules for separate functionalities
				and import them in our main store.
			</p>
			<h5 class="inner-sub-title" id="todoModule">For Example:</h5>
			<p>
				Lets say we need to create a todo app in our theme and we need to
				manipulate data in our store so we will create a separate module for it.
			</p>
			<p>Our module for todo will look something like this.</p>
			<div class="py-2 ps-3">
				<div class="code-box-copy">
					<codeBox :code="prismCodes.todoModule" />
				</div>
			</div>
			<p id="mainVuexFileWithTodoModule">
				And Our router/index.js file will look something like this:
			</p>
			<div class="py-2 ps-3">
				<div class="code-box-copy">
					<codeBox :code="prismCodes.importTodoModule" />
				</div>
			</div>
			<p>
				After creating a module inside store/modules folder we import that file
				in the main store file, and use it inside the modules key while setting
				the vuex store.
			</p>
			<h4 class="sub-title" id="routerDispatch">
				Calling Actions through Router Dispatch:
			</h4>

			<p>
				If we want to dispatch in our main store, we write
				<span class="bold"> this.$store.dispatch('actionName',payload)</span>,
				but if we want to dispatch actions of our todo module we will write
				<span class="bold">
					this.$store.dispatch('todo/actionName',payload) </span
				>. Here we have used todo in the moduels key inside the main store file,
				so we trigger the action through that name. If you give some other name
				inside the modules then thenamed name actions will be triggered through
				that name.
			</p>
			<p class="alert-box alert alert-primary">
				<strong>Tip:</strong> For more information please look at the official
				documentation of vuex:
				<a href="https://vuex.vuejs.org/" target="_blank"
					>https://vuex.vuejs.org/</a
				>
			</p>
		</div>
	</div>
</template>

<script>
import { highlight, languages } from "prismjs/components/prism-core";
export default {
	methods: {
		highlighter(code) {
			return highlight(code, languages.js); // languages.<insert language> to return html with markup
		},
	},
	data() {
		return {
			prismCodes: {
				installVuex: `npm install vuex`,
				setupStore: `import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    getters: {
    
    },
    mutations: {
    },
    actions: {
    },
});`,
				todoModule: `<!-- store/modules/todo.js -->;

import ToDo from '../../data/todo';

const state = {
    todo : ToDo.data
};

// getters
const getters = {

};

// mutations
const mutations = {
    taskcomplete:(state,payload)=>{
        state.todo.find(function (list) {
            if (list.id === payload) {
                return list.status = list.status === 'complete' ? 'incomplete' : 'complete';
            }
        });
    },
    alltaskcomplete:(state,payload)=>{
        state.todo.filter(function (list) {
                return list.status = payload === true ? 'complete':'incomplete';
        });
    },
    tododelete:(state,payload)=>{
        state.todo = state.todo.filter(list => list.id !== payload);
    },
    addtodo:(state,payload)=>{
        let id = state.todo.slice(-1)[0].id+1;
            state.todo.push(
            {
                'id': id,
                'title': payload,
                'delete': false,
                'status': 'incomplete'
            }
        );
    }

};

// actions
const actions = {
    taskcomplete:(context, payload) => {
        context.commit('taskcomplete',payload);
    },
    alltaskcomplete:(context,payload) => {
        context.commit('alltaskcomplete',payload);
    },
    tododelete:(context, payload) => {
        context.commit('tododelete',payload);
    },
    addtodo:(context, payload) => {
        context.commit('addtodo',payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};`,
				importTodoModule: `import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    getters: {
        
    },
    actions: {
    },
    modules: {
        todo,
    }
});`,
			},
		};
	},
};
</script>

<style></style>
