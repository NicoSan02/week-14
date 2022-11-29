class Sidebar {
    get resetBtn () {
        return $('#reset_sidebar_link')
    }

    get closeBtn () {
        return $('#react-burger-cross-btn')
    }

    get aboutBtn () {
        return $('#about_sidebar_link')
    }

    get facebookIcon () {
        return $('body > div.footer.has-text-white > div > div:nth-child(1) > div.column.social-container > a:nth-child(2)')
    }

    get linkedinIcon () {
        return $('body > div.footer.has-text-white > div > div:nth-child(1) > div.column.social-container > a:nth-child(3)')
    }

    get twitterIcon () {
        return $('body > div.footer.has-text-white > div > div:nth-child(1) > div.column.social-container > a:nth-child(4)')
    }
}

export default new Sidebar();