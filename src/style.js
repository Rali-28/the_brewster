/* Pre-typed Tailwindcss for quick styling */

const styles =
{
    boxWidth: 'xl:max-w-[120px] w-full',
    heading2: 'font-primary font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
    paragraph: 'font-primary font-normal text-dimBlack text-[18px] leading-[30.8px]',
    
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-center items-start',

    paddingX: 'md:px-16 px-6',
    paddingY: 'md:py-16 py-6',
    padding: 'md:px-16 px-6 md:py-12 py-4',

    marginX: 'md:mx-16 mx-6',
    marginY: 'md:my-16 my-6',

    main: 'flex items-center justify-center min-h-screen',
    layout: 'grid grid-cols-1 gap-5 md:grid-cols-2 lg-grid-cols-1',
    section: 'relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30',
    img_container: 'h-96 w-72',
    img: 'object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125',
    gradient: 'absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70',
    txt_container: 'absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0',
    txt_h1: 'text-3xl text-white font-primary_md',
    txt_p: 'mb-3 text-white transition-opacity duration-300 opacity-0 font-primary_italic group-hover:opacity-100',
};

export const layout =
{
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImg: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex 1 ${styles.flexStart} flex-col`,
    map_text: `font-primary font-normal text-[18px] leading-[30.8px] text-white leading-[.9]`,
};

export default styles;