<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Multi-Language Support</h4>
		</div>
		<div class="card-body p-t-0">
			<p>
				Considering that there will be users from multiple different countries,
				you might need to add the support for multiple languages.To help you
				with that, we have made the sidebar compatible with the multiple
				language functionality.
			</p>
			<p>You can find the dropdown that changes the language in the header.</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="@/assets/images/document/vue/codeSnaps/language_change.png"
					alt=""
				/>
			</div>
			<p></p>

			<h4 class="sub-title" id="howDoesItWork">
				How does multi-language functionality works?
			</h4>
			<p id="installI18n">
				We have used the package <span class="bold">vue-i18n</span>, you can
				install it by running the following command in the terminal.
			</p>
			<codeBox :code="prismCodes.installVueI18n" />

			<h5 class="inner-sub-title">
				vue-i18n package configuration and implementation in the project:
			</h5>
			<p>
				After you finished installing vue-i18n package in your project, follow
				the below given steps to add the multi-language support.
			</p>
			<ol>
				<li id="addI18nInMain">
					<p>Add i18n in the <span class="bold"> main.js</span> file:</p>
					<p>
						Navigate to main.js file in the src folder and import createI18n and
						integrate it with the project.
					</p>
					<div class="py-2 ps-3">
						<div class="code-box-copy">
							<codeBox :code="prismCodes.importVueI18n" />
						</div>
					</div>
				</li>
				<li>
					<p id="createJSON">
						<span class="bold"> Create JSON</span> files, for providing the
						corresponding translated word for the english words.
					</p>
					<p>
						So the JSON file for the spanish language will look something like
						this:
					</p>
					<h5 class="inner-sub-title">es.json file</h5>
					<div class="py-2 ps-3">
						<div class="code-box-copy">
							<codeBox :code="prismCodes.eslanguageJSON" />
						</div>
					</div>

					<h5 class="inner-sub-title">fr.json file</h5>
					<div class="py-2 ps-3">
						<div class="code-box-copy">
							<codeBox :code="prismCodes.frlanguageJSON" />
						</div>
					</div>
				</li>
				<li>
					<span class="bold" id="importTranslation">
						Import the translation files in main.js</span
					>
					and store them in the messages object as shown below.
					<div class="py-2 ps-3">
						<div class="code-box-copy">
							<codeBox :code="prismCodes.importTanslationFile" />
						</div>
					</div>
				</li>
				<li id="setInLocalStorage">
					Set the selected language in the localStorage:
					<p>
						Whenever a language is selected from the dropdown we will set the
						language code in the localStorage with variable name
						'currentLanguage'.
					</p>
					<p>
						We store the selected language code in the variable name locale as
						shown below.
					</p>
					<div class="py-2 ps-3">
						<div class="code-box-copy">
							<codeBox :code="prismCodes.packageIntialization" />
						</div>
					</div>

					<p>
						In above assignment , we give the condition that if the
						currentLanguage in the localStorage matches the list of languages
						available to us in i18n then we set the stored language or else we
						store the default language.
					</p>
					<p>
						To know the list of languages available to us in i18n we have
						imported localeOptions and to know the default language we have
						imported defaultLocale.
					</p>
				</li>
				<li id="initializei18n">
					<p>
						<span class="bold"> Initialize i18n</span> and add it as a module
						while mounting the main component.
					</p>
					<div class="py-2 ps-3">
						<div class="code-box-copy">
							<codeBox :code="prismCodes.packageSetup" />
						</div>
					</div>
					<div class="py-2 ps-3">
						<div class="code-box-copy">
							<codeBox :code="prismCodes.packageIntegration" />
						</div>
					</div>
				</li>
				<li id="usingInProject">
					<p>
						Now that i18n is all setup, we need to
						<span class="bold"> implement</span> it wherever the translation is
						required.
					</p>
					<p>
						To translate a word through i18n we wrap that word in
						<span class="bold"> {{ wordToTranslate }} </span>.
					</p>
					<p>
						Now if you have a variable and the words changes in that variable
						and you want to translate the words in that variable, simply wrap
						that variable like this:

						<span class="bold">{{ variableHere }}</span
						>. And in your JSON file for translation add translations for all
						the possible variable values.
					</p>

					<p>
						We have now completed implementing the vue-i18n package with our
						project. If you want you can use it in your entire project by
						providing the valid json for translation and wrapping all the words
						in <span class="bold"> {{ value }}</span>
					</p>
					<p class="warning-block mt-3">
						<span class="bold">Tip:</span> For more information on vue-i18n you
						can visit the official documentation on
						<a href="https://kazupon.github.io/vue-i18n/started.html#html"
							>Vue-i18n</a
						>
					</p>
				</li>
			</ol>
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
			wordToTranslate: `{{$t('Word To Translate Here')}}`,
			variableHere: `{{$t(Variable_here)}}`,
			value: `{{$t(Value)}}`,
			prismCodes: {
				installVueI18n: `npm install --save vue-i18n`,
				importVueI18n: `import { createI18n } from 'vue-i18n'`,
				eslanguageJSON: `{
  "Dashboard": "Tablero",
  "Default": "Defecto",
  "E-Commerce":"Comercio electronico",
  "Project":"Proyecto",
  "Project List": "Lista de proyectos"
}`,
				frlanguageJSON: `{
  "Dashboard": "Tableau de bord",
  "Default": "Défaut",
  "E-Commerce":"E-Commerce",
  "Project":"Project",
  "Project List": "Liste des projets"
}`,
				importTanslationFile: `  import en from './locales/en.json';
  import es from './locales/es.json';

  const messages = { en: en, es: es };
`,
				packageIntialization: `import { defaultLocale, localeOptions } from './constants/config';

const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale; });`,
				packageSetup: ` const i18n = createI18n({
   locale: locale,
   fallbackLocale: 'en',
   messages,
   silentTranslationWarn: true
 });`,
				packageIntegration: `createApp(App).use(i18n).mount('#app');`,
			},
		};
	},
};
</script>

<style></style>
