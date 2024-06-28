const headerNavLinks: { href?: string; title: string }[] = [
    { title: 'Home', href: '/' },
    {
        title: 'Other tools',
        links: [
            {
                title: 'AI Tools',
                links: [
                    { title: 'Chat with PDF', href: '/chatpdf-ai' }
                ]
            },
            {
                title: 'Organize & Manage',
                links: [
                    { title: 'Merge PDF', href: '/pdf-merge' },
                    { title: 'Compress PDF', href: '/compress-pdf' },
                    { title: 'PDF Converter', href: '/pdf-converter' },
                    { title: 'Split PDF', href: '/split-pdf' }
                ]
            },
            {
                title: 'View & Edit',
                links: [
                    { title: 'PDF Editor', href: '/pdf-editor' },
                    { title: 'Resize PDF', href: '/resize-pdf' },
                    { title: 'PDF Reader', href: '/pdf-reader' },
                    { title: 'E-Sign PDF', href: '/sign-pdf' }
                ]
            },
            {
                title: 'Convert from PDF',
                links: [
                    { title: 'PDF to Word', href: '/pdf-to-word' },
                    { title: 'PDF to Excel', href: '/pdf-to-excel' },
                    { title: 'PDF to PPT', href: '/pdf-to-ppt' }
                ]
            },
            {
                title: 'Convert to PDF',
                links: [
                    { title: 'Word to PDF', href: '/word-to-pdf' },
                    { title: 'Excel to PDF', href: '/excel-to-pdf' },
                    { title: 'PPT to PDF', href: '/ppt-to-pdf' },
                    { title: 'TXT to PDF', href: '/txt-to-pdf' }
                ]
            },
            {
                title: 'Convert Image',
                links: [
                    { title: 'PNG to PDF', href: '/png-to-pdf' },
                    { title: 'JPG to PDF', href: '/jpg-to-pdf' },
                    { title: 'PDF to JPG', href: '/pdf-to-jpg' }
                ]
            },
            {
                title: 'View all tools',
                href: '/pdf-tools'
            }
        ]
    },
    { title: 'Blog', href: '/blog' },
    {
        title: 'About',
        links: [
            { title: 'About Us', href: '/about-us' },
            { title: 'Contact Us', href: '/contact-us' },
            { title: 'Terms and Conditions', href: '/terms-and-conditions' },
            { title: 'Privacy Policy', href: '/privacy-policy' }
        ]
    }
]

export default headerNavLinks
