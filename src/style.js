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