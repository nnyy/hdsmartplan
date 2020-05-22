import router from "@/router"
import store from "@/store"
import {Message} from "element-ui"
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {getToken} from "@/utils/token";
import pagetitle from "@/utils/pagetitle";


NProgress.configure({showSpinner: false}) // NProgress Configuration

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    // eslint-disable-next-line no-debugger
  //  debugger
    NProgress.start()
    document.title = pagetitle(to.meta.title)
    const hastoken = getToken()

    if (hastoken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({path: '/'})
            NProgress.done()
        } else {
            next()
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }

})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
