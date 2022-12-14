export const chatPreview = (closeWindow) =>
  closeWindow
    ? 'h-[30px] w-[50px] fixed bottom-0 right-4 bg-navFontColor  pt-1 text-white rounded-t-xl '
    : 'fixed bottom-0 right-4 h-[350px] md:h-[380px] w-[300px] bg-secondBoxBg bg-gradient-to-b from-[#acefa4] to-[#9cdd94] m-0 p-0 rounded-t-lg drop-shadow-xl';

export const titleChat = (closeWindow) =>
  closeWindow
    ? 'flex flex-col-reverse items-center  rounded-xl  bg-navFontColor '
    : 'flex justify-between p-2 bg-navFontColor text-white rounded-t-lg';

export const messageArea =
  'overflow-y-auto overflow-x-hidden text-sm h-[250px] md:h-[280px] m-2 rounded-md';

export const botMessage =
  'bg-navFontColor text-white w-[150px] px-3 py-2 rounded-md drop-shadow-md';

export const chatMessage =
  'text-right bg-faqGreenBg  px-3 py-2 rounded-md w-[150px] m-3 ml-[8.5rem] drop-shadow-md';
