let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔ـ
⌟🎯⌜ قـسـم الالـعـاب 
⦓           ⦓🏆⦔          ⦔ـ
🕹️❯ ⏐ .العب
☫ ⌟تلعب حجر ورقه مع البوت⌜
🕹️❯ ⏐ .عين
☫ ⌟احزر الشخصية من العين⌜
🕹️❯ ⏐ .علم
☫ ⌟احزر الدوله من العلم⌜
🕹️❯ ⏐ .احزر
☫ ⌟احزر الشخصية من الصوره⌜
🕹️❯ ⏐ .كيبوب
☫ ⌟احزر الايدول من الصورة⌜
🕹️❯ ⏐ .ايمواجي 
☫ ⌟يبعتلك ايمواجي عشوائي⌜
🕹️❯ ⏐ .ذكاء
☫ ⌟يقيس نسبة ذكائك😏⌜
🕹️❯ ⏐ .غباء
☫ ⌟يقيس نسبة غبائك🙃⌜
🕹️❯ ⏐ .كيوت
☫ ⌟مابعرفش⌜
🕹️❯ ⏐ .تحدي
☫ ⌟حجر ورقه مقص مع صاحبك⌜
🕹️❯ ⏐ .حظ
☫ ⌟لعبة الحظ مع البوت⌜
🕹️❯ ⏐ .اكس
☫ ⌟لعبة اكس او مع صديقك⌜
🕹️❯ ⏐ .سؤال
☫ ⌟سؤال من عالم انمي⌜
🕹️❯ ⏐ .توب
☫ ⌟يعمل منشن ل 10 أعضاء⌜
🕹️❯ ⏐ .الحب
☫ ⌟يخبرك اذا كانت تحبك ام لا⌜
🕹️❯ ⏐ .زواج
☫ ⌟يجوز اتنين في الجروب 🤣⌜
🕹️❯ ⏐ .طلاق
☫ ⌟يطلق الاتنين الي تزوجو 😂⌜
🕹️❯ ⏐  .موت
☫ ⌟☠️يخمن متى ستموت☠️⌜
🕹️❯ ⏐  .هل 
☫ ⌟تسال البوت و هوا يجاوب⌜
🕹️❯ ⏐ .اديت-انمي
☫ ⌟✨يرسل لك مقطع اديت عن النمي✨⌜
🕹️❯ ⏐ .اديت-كوره
☫ ⌟⚽يرسل لك مقطع اديت عن الكوره⚽⌜
🕹️❯ ⏐ .كوره
☫ ⌟احزر اللاعب من الصورة⌜
🕹️❯ ⏐ .رياضه
☫ ⌟سوال من عالم كرة القدم⌜
🕹️❯ ⏐ .تطقيم
☫ ⌟يعطيك استايلين ولد وبنت⌜
🕹️❯ ⏐ .نصيحه
☫ ⌟يعطيك نصيحة مهمة من الحياة⌜
🕹️❯ ⏐ .شخصيه
☫ ⌟يكشفلك صفات شخصيتك⌜
🕹️❯ ⏐ .شاذ
☫ ⌟يكشف لك شاذ المجموعة 😂⌜
🕹️❯ ⏐ .خروف
☫ ⌟يكشف لك خروف المجموعة🐑⌜
🕹️❯ ⏐ .صراحه
☫ ⌟الصراحه مفتاح الراحه⌜
🕹️❯ ⏐ .ايات
☫ ⌟يعطيك ايات عشوائية⌜
🕹️❯ ⏐ .قران
☫ ⌟لطرد الشياطين من القروب⌜
⦓           ⦓🏆⦔          ⦔ـ
هذا هو قروب الدعم: https://chat.whatsapp.com/IVc2CWdcWem6IEwtly5oA6
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م٧|م7)$/i
export default handler
