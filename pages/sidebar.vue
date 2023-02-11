<template>
	<div class="row">
		<div class="col-sm-12">
			<h4 class="main-title">Sidebar.</h4>
			<p>
				There are Numerous links in sidebar and if we write whole code in html
				then number of lines will increase a lot. So to prevent that we have
				created a JSON file for the sidebar links so that we can loop through
				the array links and render our links accordingly.
			</p>
			<p>
				You can find menu.json on the following path:
				<strong> theme>src>data>menu.json </strong>
			</p>

			<h4 class="sub-title">Making changes in sidebar.</h4>
			<h5 class="inner-sub-title">
				If you require to make any changes in the sidebar, you could follow the
				given instructions.
			</h5>
			<h5 class="inner-sub-title" id="addLinksInSidebar">
				To add links in sidebar:
			</h5>
			<p>
				If you need to add or remove links in the sidebar, all you need to do is
				make changes in the menu.json file.
			</p>
			<h5 class="inner-sub-title">For Example:</h5>
			<p>Lets say we want to change the previous sidebar to the new sidebar.</p>
			<div class="row">
				<div class="col-6">
					<p>
						<span><strong>Previous Sidebar</strong></span>
					</p>
					<img
						class="img-bordered mb-3"
						src="@/assets//images/document/vue/codeSnaps/sidebarOld.png"
						alt=""
					/>
				</div>
				<div class="col-6">
					<p>
						<span><strong> New Sidebar</strong></span>
					</p>
					<img
						class="img-bordered mb-3"
						src="@/assets/images/document/vue/codeSnaps/sidebarNew.png"
						alt=""
					/>
				</div>
			</div>
			<p id="linksWithSublinks">
				To achieve this we can add new object in menu.json, where we want to add
				the new link. Here we want to add new link in between Dashboard and
				widget links so we will make the following changes.
			</p>
			<div class="py-2 ps-3">
				<div class="code-box-copy">
					<codeBox :code="prismCodes.sidebarJSON" />
				</div>
			</div>
			<p>
				As you can see above, you will need add data in the predefined format.
				Title key will contain the text you need to display for the link. In the
				path key, you will need to add the path that you define in the router.
			</p>
			<p>
				You can add icons before the link in ui by giving svg icon name in
				icon key and iconf key {icon key will represent stroke icon and iconf will represent fill icon}. 
				All the icon are present in <strong>theme>src>assets>svg>icon-sprite.svg </strong>
				In the icon-sprite.svg there are all the svg icon used 
			</p>
			<p>
				If the link contains sub links add type : 'sub', and if there are no sub
				links , just add type: 'link'
			</p>
			<p id="linksWithoutSublinks">
				<strong>For Example:</strong> If you want to add a link without any
				sublinks then add the following code.
			</p>
			<div class="py-2 ps-3">
				<div class="code-box-copy">
					<codeBox :code="prismCodes.pathWithoutParent" />
				</div>
			</div>
			<p></p>
			<p class="warning-block">
				<strong>Note:</strong>
				Make sure that the path you enter in the json is same as the one that
				you have given in the router, or else error will be thrown as same path
				will not be found.
			</p>

			<h5 class="inner-sub-title" id="removeLinksFromSidebar">
				If you want to remove links from the sidebar:
			</h5>
			<p>
				As we added code in the above section to add new links in the sidebar.
				You simply need to remove the whole object to make it disappear from the
				sidebar.
			</p>
			<p>
				<strong>For Example:</strong> We added the following code in the
				menu,json file. If we want to remove the same then we will remove the
				object in the array of links in menu.json.
			</p>
			<div class="py-2 ps-3">
				<div class="code-box-copy">
					<codeBox :code="prismCodes.pathWithParent" />
				</div>
			</div>
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
				sidebarJSON: `
<!-- menu.json -->

{
    "headTitle1": "General",
    "headTitle2": "Dashboards,Widgets & Layout.",
    "type": "headtitle"
    },
    {
    "title": "Dashboard",
    "icon": "home",
    "type": "sub",
    "badgeType": "light-primary",
    "badgeValue": "2",
    "active": false,
    "children": [
        {
        "path": "/dashboard/default",
        "title": "Default",
        "type": "link"
        },
        {
        "path": "/dashboard/ecommerce",
        "title": "E-Commerce",
        "type": "link"
        }
    ]
    },
    {
        "title": "New Link",
        "icon": "git-pull-request",
        "type": "sub",
        "active": false,
        "children": [
            {
            "path": "/newSubLink1Path",
            "title": "New Sub Link 1",
            "type": "link"
            },
            {
            "path": "/newSubLink1Path",
            "title": "New Sub Link 1",
            "type": "link"
            }
        ]
    },
    {
    "title": "Widgets",
    "icon": "airplay",
    "type": "sub",
    "active": false,
    "children": [
        {
        "path": "/widgets/general",
        "title": "General",
        "type": "link"
        },
        {
        "path": "/widgets/chart",
        "title": "Chart",
        "type": "link"
        }
    ]
    },
                             `,
				pathWithoutParent: `
<!-- menu.json -->

{
    "path": "/path_of_new_link",
    "title": "New Link",
	"iconf":"fill-home"
    "icon": "stroke-home",
    "type": "link",
    "bookmark": true
},
`,
				pathWithParent: `
<!-- menu.json -->

  {
      "title": "New Link",
      "icon": "git-pull-request",
      "type": "sub",
      "active": false,
      "children": [
          {
          "path": "/newSubLink1Path",
          "title": "New Sub Link 1",
          "type": "link"
          },
          {
          "path": "/newSubLink1Path",
          "title": "New Sub Link 1",
          "type": "link"
          }
      ]
  },`,
			},
		};
	},
};
</script>

<style></style>
