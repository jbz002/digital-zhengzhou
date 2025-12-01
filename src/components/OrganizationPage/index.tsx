import React, { useState } from 'react'
import { OrganizationCategory, Organization } from '@types/organization'
import styles from '@styles/components/OrganizationPage.module.css'

interface OrganizationPageProps {
  onOrganizationSelect?: (organization: Organization) => void
}

const OrganizationPage: React.FC<OrganizationPageProps> = ({ onOrganizationSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<OrganizationCategory | null>(OrganizationCategory.LIBRARY)

  // 机构分类配置
  const categories = [
    { id: OrganizationCategory.LIBRARY, name: '图书馆', icon: '📚' },
    { id: OrganizationCategory.SCHOOL, name: '学校', icon: '🏫' },
    { id: OrganizationCategory.BOOKSTORE, name: '书店', icon: '📖' },
    { id: OrganizationCategory.GOVERNMENT, name: '党政机关', icon: '🏛️' },
    { id: OrganizationCategory.HOSPITAL, name: '医院', icon: '🏥' },
    { id: OrganizationCategory.BANK, name: '银行', icon: '🏦' },
    { id: OrganizationCategory.POST_OFFICE, name: '邮局', icon: '📮' },
    { id: OrganizationCategory.COMMUNITY_CENTER, name: '社区中心', icon: '🏘️' },
    { id: OrganizationCategory.POLICE, name: '派出所', icon: '👮' },
    { id: OrganizationCategory.FIRE_STATION, name: '消防站', icon: '🚒' },
    { id: OrganizationCategory.PARK, name: '公园', icon: '🌳' },
    { id: OrganizationCategory.MUSEUM, name: '博物馆', icon: '🏛️' },
    { id: OrganizationCategory.THEATER, name: '剧院', icon: '🎭' },
    { id: OrganizationCategory.SPORTS_CENTER, name: '体育馆', icon: '🏟️' },
    { id: OrganizationCategory.MARKET, name: '商场', icon: '🏬' },
    { id: OrganizationCategory.HOTEL, name: '酒店', icon: '🏨' },
    { id: OrganizationCategory.GAS_STATION, name: '加油站', icon: '⛽' },
    { id: OrganizationCategory.PHARMACY, name: '药店', icon: '💊' },
    { id: OrganizationCategory.TELECOMMUNICATION, name: '电信营业厅', icon: '📱' },
    { id: OrganizationCategory.INSURANCE, name: '保险公司', icon: '🛡️' }
  ]

  // 示例机构数据
  const organizations: Record<OrganizationCategory, Organization[]> = {
    [OrganizationCategory.LIBRARY]: [
      { id: '1', name: '郑州图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区优胜南路1号', phone: '0371-12345678' },
      { id: '2', name: '河南省图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区嵩山南路150号', phone: '0371-87654321' },
      { id: '25', name: '金水区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区文化路2号', phone: '0371-63888888' },
      { id: '26', name: '中原区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市中原区中原西路78号', phone: '0371-67654321' },
      { id: '27', name: '二七区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市二七区淮河路55号', phone: '0371-68987654' },
      { id: '28', name: '管城回族区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市管城区东大街45号', phone: '0371-66345678' },
      { id: '114', name: '惠济区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市惠济区开元路18号', phone: '0371-63781234' },
      { id: '115', name: '上街区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市上街区中心路128号', phone: '0371-68921111' },
      { id: '116', name: '郑东新区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市郑东新区商务内环路88号', phone: '0371-66178888' },
      { id: '117', name: '高新区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市高新技术开发区瑞达路89号', phone: '0371-67992222' },
      { id: '118', name: '经济技术开发区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市经济技术开发区航海东路1299号', phone: '0371-66783333' },
      { id: '119', name: '航空港区图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市航空港区新港大道南段', phone: '0371-86194444' },
      { id: '120', name: '郑州少年儿童图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区金水路88号', phone: '0371-65967777' },
      { id: '121', name: '郑州大学图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市科学大道100号郑大校内', phone: '0371-67783655' },
      { id: '122', name: '河南农业大学图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市农业路63号农大校内', phone: '0371-63558111' },
      { id: '123', name: '郑州工业大学图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市高新技术开发区莲花街', phone: '0371-67756688' },
      { id: '124', name: '河南财经政法大学图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区文化路80号', phone: '0371-63558999' },
      { id: '125', name: '华北水利水电大学图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区北环路36号', phone: '0371-69318888' },
      { id: '126', name: '郑州轻工业大学图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市东风路5号轻院校内', phone: '0371-63556123' },
      { id: '127', name: '中原工学院图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市中原区桐柏路62号', phone: '0371-67698877' },
      { id: '128', name: '郑州航空工业管理学院图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市郑东新区文苑西路15号', phone: '0371-60632255' }
    ],
    [OrganizationCategory.SCHOOL]: [
      { id: '3', name: '郑州大学', category: OrganizationCategory.SCHOOL, address: '郑州市科学大道100号', phone: '0371-67781234' },
      { id: '4', name: '郑州市第一中学', category: OrganizationCategory.SCHOOL, address: '郑州市中原区中原西路40号', phone: '0371-67987654' },
      { id: '29', name: '河南工业大学', category: OrganizationCategory.SCHOOL, address: '郑州市高新技术开发区莲花街', phone: '0371-67756789' },
      { id: '30', name: '华北水利水电大学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区北环路36号', phone: '0371-69318888' },
      { id: '31', name: '河南财经政法大学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区文化路80号', phone: '0371-63588000' },
      { id: '32', name: '郑州外国语学校', category: OrganizationCategory.SCHOOL, address: '郑州市高新技术开发区枫杨街6号', phone: '0371-67987888' },
      { id: '33', name: '河南省实验中学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区文化路60号', phone: '0371-63945678' },
      { id: '34', name: '郑州市第四中学', category: OrganizationCategory.SCHOOL, address: '郑州市二七区京广中路86号', phone: '0371-66967890' },
      { id: '129', name: '郑州师范学院', category: OrganizationCategory.SCHOOL, address: '郑州市惠济区英才街6号', phone: '0371-65501111' },
      { id: '130', name: '郑州轻工业大学', category: OrganizationCategory.SCHOOL, address: '郑州市东风路5号', phone: '0371-63556321' },
      { id: '131', name: '中原工学院', category: OrganizationCategory.SCHOOL, address: '郑州市中原区桐柏路62号', phone: '0371-67698800' },
      { id: '132', name: '河南农业大学', category: OrganizationCategory.SCHOOL, address: '郑州市农业路63号', phone: '0371-63558899' },
      { id: '133', name: '河南中医药大学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区博学路299号', phone: '0371-65680000' },
      { id: '134', name: '郑州航空工业管理学院', category: OrganizationCategory.SCHOOL, address: '郑州市郑东新区文苑西路15号', phone: '0371-60632222' },
      { id: '135', name: '郑州西亚斯学院', category: OrganizationCategory.SCHOOL, address: '郑州市新郑市人民路168号', phone: '0371-62606666' },
      { id: '136', name: '郑州升达经贸管理学院', category: OrganizationCategory.SCHOOL, address: '郑州市新郑市龙湖镇祥和路1号', phone: '0371-62436666' },
      { id: '137', name: '黄河科技学院', category: OrganizationCategory.SCHOOL, address: '郑州市二七区航海中路94号', phone: '0371-68956789' },
      { id: '138', name: '郑州科技学院', category: OrganizationCategory.SCHOOL, address: '郑州市二七区马寨工业园区学院路1号', phone: '0371-67890123' },
      { id: '139', name: '郑州工商学院', category: OrganizationCategory.SCHOOL, address: '郑州市郑东新区龙子湖高校园区', phone: '0371-85302222' },
      { id: '140', name: '郑州成功财经学院', category: OrganizationCategory.SCHOOL, address: '郑州市巩义市紫荆路136号', phone: '0371-64561666' },
      { id: '141', name: '郑州信息科技职业学院', category: OrganizationCategory.SCHOOL, address: '郑州市中原区桐柏南路100号', phone: '0371-67697777' },
      { id: '142', name: '河南交通职业技术学院', category: OrganizationCategory.SCHOOL, address: '郑州市二七区航海中路165号', phone: '0371-68870000' },
      { id: '143', name: '河南经贸职业学院', category: OrganizationCategory.SCHOOL, address: '郑州市郑东新区龙子湖高校园区', phone: '0371-85301111' },
      { id: '144', name: '河南信息统计职业学院', category: OrganizationCategory.SCHOOL, address: '郑州市金水区优胜北路4号', phone: '0371-65719999' },
      { id: '145', name: '郑州旅游职业学院', category: OrganizationCategory.SCHOOL, address: '郑州市郑东新区金龙路188号', phone: '0371-68890000' },
      { id: '146', name: '郑州电力高等专科学校', category: OrganizationCategory.SCHOOL, address: '郑州市中原区电厂路12号', phone: '0371-67691111' },
      { id: '147', name: '郑州澍青医学高等专科学校', category: OrganizationCategory.SCHOOL, address: '郑州市二七区马寨工业园工业路18号', phone: '0371-67895222' },
      { id: '148', name: '郑州职业技术学院', category: OrganizationCategory.SCHOOL, address: '郑州市郑上路999号', phone: '0371-67867888' },
      { id: '149', name: '郑州铁路职业技术学院', category: OrganizationCategory.SCHOOL, address: '郑州市二七区幸福路1号', phone: '0371-66805255' },
      { id: '150', name: '郑州市第二中学', category: OrganizationCategory.SCHOOL, address: '郑州市二七区桃源路43号', phone: '0371-67445678' },
      { id: '151', name: '郑州市第三中学', category: OrganizationCategory.SCHOOL, address: '郑州市管城区南关街29号', phone: '0371-66341986' },
      { id: '152', name: '郑州市第五中学', category: OrganizationCategory.SCHOOL, address: '郑州市管城区南关街3号', phone: '0371-66322384' },
      { id: '153', name: '郑州市第六中学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区群英路7号', phone: '0371-63889888' },
      { id: '154', name: '郑州市第七中学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区三全路中段', phone: '0371-65828660' },
      { id: '155', name: '郑州市第八中学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区经三路27号', phone: '0371-65953712' },
      { id: '156', name: '郑州市第九中学', category: OrganizationCategory.SCHOOL, address: '郑州市金水区农业路21号', phone: '0371-63925523' },
      { id: '157', name: '郑州市第十一中学', category: OrganizationCategory.SCHOOL, address: '郑州市管城区城南路256号', phone: '0371-66313615' },
      { id: '158', name: '郑州市第十九中学', category: OrganizationCategory.SCHOOL, address: '郑州市二七区齐礼阎乡57号', phone: '0371-68908877' }
    ],
    [OrganizationCategory.BOOKSTORE]: [
      { id: '5', name: '郑州市新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市二七区解放路1号', phone: '0371-66688888' },
      { id: '35', name: '郑州购书中心', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区人民路22号', phone: '0371-66223344' },
      { id: '36', name: '中原图书大厦', category: OrganizationCategory.BOOKSTORE, address: '郑州市中原区建设西路10号', phone: '0371-67658888' },
      { id: '37', name: '学海书城', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区农业路68号', phone: '0371-65997788' },
      { id: '38', name: '三联书店郑州分店', category: OrganizationCategory.BOOKSTORE, address: '郑州市二七区大学路80号', phone: '0371-67889900' },
      { id: '159', name: '郑州市图书馆书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区嵩山南路150号', phone: '0371-87654321' },
      { id: '160', name: '河南省新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区经五路66号', phone: '0371-65966888' },
      { id: '161', name: '金水区新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区文化路15号', phone: '0371-63889999' },
      { id: '162', name: '中原区新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市中原区建设西路88号', phone: '0371-67651111' },
      { id: '163', name: '二七区新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市二七区大学路36号', phone: '0371-67992222' },
      { id: '164', name: '管城回族区新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市管城区东大街28号', phone: '0371-66336666' },
      { id: '165', name: '惠济区新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市惠济区开元路28号', phone: '0371-63785555' },
      { id: '166', name: '郑东新区新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市郑东新区商务内环路66号', phone: '0371-66179999' },
      { id: '167', name: '高新区新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市高新技术开发区瑞达路56号', phone: '0371-67993333' },
      { id: '168', name: '郑州书城', category: OrganizationCategory.BOOKSTORE, address: '郑州市二七区大学南路168号', phone: '0371-68887777' },
      { id: '169', name: '中原书城', category: OrganizationCategory.BOOKSTORE, address: '郑州市中原区中原西路188号', phone: '0371-67662222' },
      { id: '170', name: '金水书城', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区花园路88号', phone: '0371-65776666' },
      { id: '171', name: '二七书城', category: OrganizationCategory.BOOKSTORE, address: '郑州市二七区京广南路88号', phone: '0371-68885555' },
      { id: '172', name: '经八路图书城', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区经八路16号', phone: '0371-63994444' },
      { id: '173', name: '郑州古籍书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区优胜北路8号', phone: '0371-65718888' },
      { id: '174', name: '郑州艺术书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区文化路69号', phone: '0371-63881111' },
      { id: '175', name: '郑州科技书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市中原区桐柏南路128号', phone: '0371-67675555' },
      { id: '176', name: '郑州教育书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市二七区淮河东路55号', phone: '0371-68996666' },
      { id: '177', name: '郑州儿童书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区纬五路30号', phone: '0371-65968888' },
      { id: '178', name: '郑州外文书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区人民路26号', phone: '0371-66224444' },
      { id: '179', name: '郑州法律书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区农业路16号', phone: '0371-65993333' },
      { id: '180', name: '郑州医学书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市中原区建设西路56号', phone: '0371-67667777' },
      { id: '181', name: '郑州文史书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区纬一路8号', phone: '0371-65959999' },
      { id: '182', name: '郑州经管书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市金水区丰产路88号', phone: '0371-63952222' }
    ],
    [OrganizationCategory.GOVERNMENT]: [
      { id: '6', name: '郑州市人民政府', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路233号', phone: '0371-67181234' },
      { id: '39', name: '河南省人民政府', category: OrganizationCategory.GOVERNMENT, address: '郑州市金水区纬四路16号', phone: '0371-65906666' },
      { id: '40', name: '郑州市人大常委会', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路233号', phone: '0371-67185000' },
      { id: '41', name: '郑州市政协', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路233号', phone: '0371-67186000' },
      { id: '42', name: '郑州市教育局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路40号', phone: '0371-66968888' },
      { id: '43', name: '郑州市卫健委', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区桐柏南路30号', phone: '0371-67170888' },
      { id: '183', name: '郑州市公安局', category: OrganizationCategory.GOVERNMENT, address: '郑州市金水区金水路261号', phone: '0371-69621110' },
      { id: '184', name: '郑州市财政局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区淮河西路33号', phone: '0371-67181188' },
      { id: '185', name: '郑州市民政局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区桐柏路32号', phone: '0371-67172099' },
      { id: '186', name: '郑州市人社局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区建设西路86号', phone: '0371-67182255' },
      { id: '187', name: '郑州市住建局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区淮河路35号', phone: '0371-67183377' },
      { id: '188', name: '郑州市交通局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区淮河路25号', phone: '0371-67184411' },
      { id: '189', name: '郑州市商务局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区桐柏南路186号', phone: '0371-67185522' },
      { id: '190', name: '郑州市发改委', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路198号', phone: '0371-67186633' },
      { id: '191', name: '郑州市工信局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区工人路368号', phone: '0371-67187744' },
      { id: '192', name: '郑州市司法局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区桐柏南路220号', phone: '0371-67188855' },
      { id: '193', name: '郑州市自然资源和规划局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区文化宫路32号', phone: '0371-67189966' },
      { id: '194', name: '郑州市生态环境局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路71号', phone: '0371-67181011' },
      { id: '195', name: '郑州市城管局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路85号', phone: '0371-67182200' },
      { id: '196', name: '郑州市文广旅局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区嵩山南路18号', phone: '0371-67183333' },
      { id: '197', name: '郑州市市场监管局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区文化宫路6号', phone: '0371-67184444' },
      { id: '198', name: '郑州市应急管理局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区桐柏南路182号', phone: '0371-67185555' },
      { id: '199', name: '郑州市体育局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区建设西路201号', phone: '0371-67186666' },
      { id: '200', name: '郑州市统计局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路189号', phone: '0371-67187777' },
      { id: '201', name: '郑州市医保局', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路162号', phone: '0371-67188888' }
    ],
    [OrganizationCategory.HOSPITAL]: [
      { id: '7', name: '郑州大学第一附属医院', category: OrganizationCategory.HOSPITAL, address: '郑州市建设东路1号', phone: '0371-66913114' },
      { id: '44', name: '河南省人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区纬五路7号', phone: '0371-65580120' },
      { id: '45', name: '郑州大学第二附属医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区经八路2号', phone: '0371-63970120' },
      { id: '46', name: '郑州大学第五附属医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区康复前街3号', phone: '0371-66916922' },
      { id: '47', name: '郑州市第一人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市管城区东大街56号', phone: '0371-66343120' },
      { id: '48', name: '郑州市中心医院', category: OrganizationCategory.HOSPITAL, address: '郑州市中原区桐柏路195号', phone: '0371-67690000' },
      { id: '49', name: '河南省中医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区东风路6号', phone: '0371-60908888' },
      { id: '202', name: '郑州市第三人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市管城区南顺城街11号', phone: '0371-66963220' },
      { id: '203', name: '郑州市第二人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区解放路88号', phone: '0371-67170990' },
      { id: '204', name: '郑州市第四人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区庆丰街15号', phone: '0371-66962244' },
      { id: '205', name: '郑州市第五人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区黄河路33号', phone: '0371-63934118' },
      { id: '206', name: '郑州市第六人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区京广南路39号', phone: '0371-67138988' },
      { id: '207', name: '郑州市第七人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区勤劳街1号', phone: '0371-67420555' },
      { id: '208', name: '郑州市第八人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区桃园路25号', phone: '0371-66903120' },
      { id: '209', name: '郑州市第九人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区经三路25号', phone: '0371-65970120' },
      { id: '210', name: '郑州市第十人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市中原区伏牛路198号', phone: '0371-67448666' },
      { id: '211', name: '河南省儿童医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区龙湖外环东路33号', phone: '0371-85515586' },
      { id: '212', name: '河南省妇幼保健院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区康复前街7号', phone: '0371-66903220' },
      { id: '213', name: '河南省肿瘤医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区东明路127号', phone: '0371-65587788' },
      { id: '214', name: '郑州市妇幼保健院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区金水路77号', phone: '0371-63883355' },
      { id: '215', name: '郑州市儿童医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区岗杜街255号', phone: '0371-63958120' },
      { id: '216', name: '郑州市骨科医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区陇海中路58号', phone: '0371-66963488' },
      { id: '217', name: '郑州市人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区黄河路33号', phone: '0371-63933551' },
      { id: '218', name: '郑州市中医院', category: OrganizationCategory.HOSPITAL, address: '郑州市中原区文化宫路168号', phone: '0371-67447899' },
      { id: '219', name: '郑州市颈肩腰腿痛医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区庆丰街14号', phone: '0371-66903387' },
      { id: '220', name: '金水区总医院', category: OrganizationCategory.HOSPITAL, address: '郑州市金水区纬五路17号', phone: '0371-65961111' },
      { id: '221', name: '中原区人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市中原区中原西路167号', phone: '0371-67691111' },
      { id: '222', name: '二七区人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市二七区勤劳街1号', phone: '0371-60606999' },
      { id: '223', name: '管城回族区人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市管城区菜市街1号', phone: '0371-66363120' },
      { id: '224', name: '惠济区人民医院', category: OrganizationCategory.HOSPITAL, address: '郑州市惠济区开元路76号', phone: '0371-63785555' }
    ],
    [OrganizationCategory.BANK]: [
      { id: '8', name: '中国工商银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区花园路39号', phone: '0371-65791234' },
      { id: '50', name: '中国建设银行河南省分行', category: OrganizationCategory.BANK, address: '郑州市金水区花园路39号', phone: '0371-65558888' },
      { id: '51', name: '中国农业银行河南省分行', category: OrganizationCategory.BANK, address: '郑州市金水区农业路88号', phone: '0371-65961888' },
      { id: '52', name: '中国银行河南省分行', category: OrganizationCategory.BANK, address: '郑州市金水区商务外环路9号', phone: '0371-67088888' },
      { id: '53', name: '交通银行河南省分行', category: OrganizationCategory.BANK, address: '郑州市金水区郑花路11号', phone: '0371-65897777' },
      { id: '54', name: '招商银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区农业东路33号', phone: '0371-68096666' },
      { id: '55', name: '郑州银行总行', category: OrganizationCategory.BANK, address: '郑州市郑东新区商务外环路22号', phone: '0371-68088888' },
      { id: '225', name: '中国邮政储蓄银行河南省分行', category: OrganizationCategory.BANK, address: '郑州市金水区花园路59号', phone: '0371-65734567' },
      { id: '226', name: '中国光大银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区纬五路16号', phone: '0371-65966666' },
      { id: '227', name: '中国民生银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区农业路28号', phone: '0371-69338888' },
      { id: '228', name: '中信银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区商务内环路1号', phone: '0371-67097777' },
      { id: '229', name: '浦发银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区商务外环路10号', phone: '0371-67098888' },
      { id: '230', name: '兴业银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区商务内环路2号', phone: '0371-67099999' },
      { id: '231', name: '华夏银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区农业路6号', phone: '0371-65718888' },
      { id: '232', name: '平安银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区农业东路6号', phone: '0371-68095555' },
      { id: '233', name: '广发银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区金水路288号', phone: '0371-65887777' },
      { id: '234', name: '恒丰银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区商务外环路6号', phone: '0371-67096666' },
      { id: '235', name: '浙商银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区商务内环路8号', phone: '0371-67093333' },
      { id: '236', name: '渤海银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区金水路266号', phone: '0371-65886666' },
      { id: '237', name: '中原银行总行', category: OrganizationCategory.BANK, address: '郑州市郑东新区商务外环路26号', phone: '0371-68099999' },
      { id: '238', name: '洛阳银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区花园路36号', phone: '0371-65798888' },
      { id: '239', name: '焦作银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区农业路18号', phone: '0371-65966777' },
      { id: '240', name: '工商银行河南省分行营业部', category: OrganizationCategory.BANK, address: '郑州市金水区黄河路51号', phone: '0371-65790000' },
      { id: '241', name: '建设银行河南省分行营业部', category: OrganizationCategory.BANK, address: '郑州市金水区经三路99号', phone: '0371-65550000' },
      { id: '242', name: '农业银行河南省分行营业部', category: OrganizationCategory.BANK, address: '郑州市金水区纬四路33号', phone: '0371-65960000' },
      { id: '243', name: '中国银行河南省分行营业部', category: OrganizationCategory.BANK, address: '郑州市金水区农业路26号', phone: '0371-67080000' },
      { id: '244', name: '交通银行河南省分行营业部', category: OrganizationCategory.BANK, address: '郑州市金水区花园路45号', phone: '0371-65889999' },
      { id: '245', name: '工商银行金水支行', category: OrganizationCategory.BANK, address: '郑州市金水区文化路17号', phone: '0371-63882222' },
      { id: '246', name: '工商银行中原支行', category: OrganizationCategory.BANK, address: '郑州市中原区建设西路188号', phone: '0371-67661111' },
      { id: '247', name: '工商银行二七支行', category: OrganizationCategory.BANK, address: '郑州市二七区大学路16号', phone: '0371-67993333' },
      { id: '248', name: '工商银行郑东支行', category: OrganizationCategory.BANK, address: '郑州市郑东新区商务外环路25号', phone: '0371-68097777' },
      { id: '249', name: '郑州银行金水支行', category: OrganizationCategory.BANK, address: '郑州市金水区金水路18号', phone: '0371-68090000' }
    ],
    [OrganizationCategory.POST_OFFICE]: [
      { id: '9', name: '郑州市邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区花园路59号', phone: '0371-65734567' },
      { id: '56', name: '金水区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区文化路66号', phone: '0371-63889999' },
      { id: '57', name: '中原区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市中原区桐柏南路200号', phone: '0371-67651111' },
      { id: '58', name: '二七区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市二七区大学路88号', phone: '0371-67992222' },
      { id: '59', name: '管城回族区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市管城区东大街48号', phone: '0371-66334444' },
      { id: '250', name: '惠济区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市惠济区开元路28号', phone: '0371-63786666' },
      { id: '251', name: '上街区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市上街区中心路88号', phone: '0371-68926666' },
      { id: '252', name: '郑东新区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市郑东新区商务内环路68号', phone: '0371-66179999' },
      { id: '253', name: '高新区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市高新技术开发区瑞达路76号', phone: '0371-67994444' },
      { id: '254', name: '经济技术开发区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市经济技术开发区航海东路1208号', phone: '0371-66787777' },
      { id: '255', name: '航空港区邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市航空港区新港大道北段', phone: '0371-86197777' },
      { id: '256', name: '人民路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区人民路19号', phone: '0371-66221111' },
      { id: '257', name: '花园路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区花园路28号', phone: '0371-65782222' },
      { id: '258', name: '经三路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区经三路26号', phone: '0371-65993333' },
      { id: '259', name: '农业路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区农业路38号', phone: '0371-65968888' },
      { id: '260', name: '文化路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区文化路68号', phone: '0371-63882222' },
      { id: '261', name: '纬五路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区纬五路30号', phone: '0371-65967777' },
      { id: '262', name: '黄河路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区黄河路30号', phone: '0371-63901111' },
      { id: '263', name: '纬四路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区纬四路15号', phone: '0371-65966666' },
      { id: '264', name: '建设路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市中原区建设西路68号', phone: '0371-67663333' },
      { id: '265', name: '桐柏路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市中原区桐柏南路66号', phone: '0371-67669999' },
      { id: '266', name: '大学路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市二七区大学路52号', phone: '0371-67991111' },
      { id: '267', name: '京广路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市二七区京广南路26号', phone: '0371-68883333' },
      { id: '268', name: '航海路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市二七区航海中路98号', phone: '0371-68891111' },
      { id: '269', name: '陇海路邮政支局', category: OrganizationCategory.POST_OFFICE, address: '郑州市二七区陇海西路288号', phone: '0371-68882222' }
    ],
    [OrganizationCategory.COMMUNITY_CENTER]: [
      { id: '10', name: '金水区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区经一路8号', phone: '0371-61234567' },
      { id: '60', name: '中原区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市中原区桐柏南路158号', phone: '0371-67668888' },
      { id: '61', name: '二七区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市二七区淮南街16号', phone: '0371-68119999' },
      { id: '62', name: '管城回族区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市管城区陇海东路68号', phone: '0371-66127777' },
      { id: '63', name: '惠济区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市惠济区开元路16号', phone: '0371-63678888' },
      { id: '270', name: '上街区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市上街区中心路66号', phone: '0371-68918888' },
      { id: '271', name: '郑东新区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市郑东新区龙湖外环路18号', phone: '0371-66178888' },
      { id: '272', name: '高新区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市高新技术开发区科学大道98号', phone: '0371-67995555' },
      { id: '273', name: '经济技术开发区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市经济技术开发区第八大街56号', phone: '0371-66786666' },
      { id: '274', name: '航空港区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市航空港区远航路16号', phone: '0371-86198888' },
      { id: '275', name: '南阳路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区南阳路88号', phone: '0371-63886666' },
      { id: '276', name: '人民路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区人民路25号', phone: '0371-66223333' },
      { id: '277', name: '文化路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区文化路76号', phone: '0371-63887777' },
      { id: '278', name: '东风路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区东风路8号', phone: '0371-63889999' },
      { id: '279', name: '花园路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区花园路50号', phone: '0371-65795555' },
      { id: '280', name: '经三路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区经三路28号', phone: '0371-65997777' },
      { id: '281', name: '农业路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区农业路52号', phone: '0371-65969999' },
      { id: '282', name: '建设路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市中原区建设西路80号', phone: '0371-67667777' },
      { id: '283', name: '桐柏路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市中原区桐柏南路156号', phone: '0371-67669999' },
      { id: '284', name: '航海路街道办事处', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市二七区航海中路168号', phone: '0371-68893333' }
    ],
    [OrganizationCategory.POLICE]: [
      { id: '64', name: '金水区公安分局', category: OrganizationCategory.POLICE, address: '郑州市金水区经三路66号', phone: '0371-69621110' },
      { id: '65', name: '中原区公安分局', category: OrganizationCategory.POLICE, address: '郑州市中原区建设西路263号', phone: '0371-67621110' },
      { id: '66', name: '二七区公安分局', category: OrganizationCategory.POLICE, address: '郑州市二七区淮南街15号', phone: '0371-68821110' },
      { id: '67', name: '管城回族区公安分局', category: OrganizationCategory.POLICE, address: '郑州市管城区塔湾路61号', phone: '0371-66321110' },
      { id: '68', name: '郑州市公安局交通警察支队', category: OrganizationCategory.POLICE, address: '郑州市金水区金水路261号', phone: '0371-69621110' },
      { id: '285', name: '惠济区公安分局', category: OrganizationCategory.POLICE, address: '郑州市惠济区开元路16号', phone: '0371-63721110' },
      { id: '286', name: '上街区公安分局', category: OrganizationCategory.POLICE, address: '郑州市上街区中心路128号', phone: '0371-68921110' },
      { id: '287', name: '郑东新区公安分局', category: OrganizationCategory.POLICE, address: '郑州市郑东新区龙湖中环路16号', phone: '0371-66121110' },
      { id: '288', name: '高新区公安分局', category: OrganizationCategory.POLICE, address: '郑州市高新技术开发区瑞达路68号', phone: '0371-67921110' },
      { id: '289', name: '经济技术开发区公安分局', category: OrganizationCategory.POLICE, address: '郑州市经济技术开发区第八大街88号', phone: '0371-66721110' },
      { id: '290', name: '航空港区公安分局', category: OrganizationCategory.POLICE, address: '郑州市航空港区新港大道北段', phone: '0371-86121110' },
      { id: '291', name: '金水路派出所', category: OrganizationCategory.POLICE, address: '郑州市金水区金水路88号', phone: '0371-63903333' },
      { id: '292', name: '花园路派出所', category: OrganizationCategory.POLICE, address: '郑州市金水区花园路36号', phone: '0371-65704444' },
      { id: '293', name: '文化路派出所', category: OrganizationCategory.POLICE, address: '郑州市金水区文化路18号', phone: '0371-63805555' },
      { id: '294', name: '东风路派出所', category: OrganizationCategory.POLICE, address: '郑州市金水区东风路16号', phone: '0371-63806666' },
      { id: '295', name: '经三路派出所', category: OrganizationCategory.POLICE, address: '郑州市金水区经三路36号', phone: '0371-65907777' },
      { id: '296', name: '农业路派出所', category: OrganizationCategory.POLICE, address: '郑州市金水区农业路28号', phone: '0371-65908888' }
    ],
    [OrganizationCategory.FIRE_STATION]: [
      { id: '69', name: '郑州市消防支队', category: OrganizationCategory.FIRE_STATION, address: '郑州市金水区福元路158号', phone: '0371-69821110' },
      { id: '70', name: '金水区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市金水区东风路16号', phone: '0371-63821119' },
      { id: '71', name: '中原区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市中原区桐柏南路226号', phone: '0371-67621119' },
      { id: '72', name: '二七区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市二七区京广南路56号', phone: '0371-68821119' },
      { id: '297', name: '管城回族区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市管城区紫荆山路88号', phone: '0371-66321119' },
      { id: '298', name: '惠济区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市惠济区开元路26号', phone: '0371-63721119' },
      { id: '299', name: '上街区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市上街区中心路168号', phone: '0371-68921119' },
      { id: '300', name: '郑东新区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市郑东新区龙湖中环路28号', phone: '0371-66121119' },
      { id: '301', name: '高新区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市高新技术开发区瑞达路96号', phone: '0371-67921119' },
      { id: '302', name: '经济技术开发区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市经济技术开发区航海东路1288号', phone: '0371-66721119' },
      { id: '303', name: '航空港区消防大队', category: OrganizationCategory.FIRE_STATION, address: '郑州市航空港区远航路88号', phone: '0371-86121119' },
      { id: '304', name: '人民路消防中队', category: OrganizationCategory.FIRE_STATION, address: '郑州市金水区人民路36号', phone: '0371-66221119' },
      { id: '305', name: '花园路消防中队', category: OrganizationCategory.FIRE_STATION, address: '郑州市金水区花园路46号', phone: '0371-65721119' },
      { id: '306', name: '经三路消防中队', category: OrganizationCategory.FIRE_STATION, address: '郑州市金水区经三路46号', phone: '0371-65921119' }
    ],
    [OrganizationCategory.PARK]: [
      { id: '73', name: '郑州人民公园', category: OrganizationCategory.PARK, address: '郑州市金水区金水路105号', phone: '0371-65956668' },
      { id: '74', name: '郑州碧沙岗公园', category: OrganizationCategory.PARK, address: '郑州市中原区建设路31号', phone: '0371-67983216' },
      { id: '75', name: '紫荆山公园', category: OrganizationCategory.PARK, address: '郑州市金水区金水路108号', phone: '0371-65961571' },
      { id: '76', name: '郑州植物园', category: OrganizationCategory.PARK, address: '郑州市中原区中原西路与西四环交叉口', phone: '0371-67882888' },
      { id: '77', name: '郑州森林公园', category: OrganizationCategory.PARK, address: '郑州市金水区中州大道与北四环交叉口', phone: '0371-65721110' },
      { id: '78', name: '月湖公园', category: OrganizationCategory.PARK, address: '郑州市郑东新区龙湖中环路与龙源十三街交叉口', phone: '0371-68181111' },
      { id: '307', name: '西流湖公园', category: OrganizationCategory.PARK, address: '郑州市中原区西流湖路', phone: '0371-67883333' },
      { id: '308', name: '碧沙岗公园北园', category: OrganizationCategory.PARK, address: '郑州市中原区建设西路68号', phone: '0371-67984444' },
      { id: '309', name: '五一公园', category: OrganizationCategory.PARK, address: '郑州市中原区建设西路23号', phone: '0371-67985555' },
      { id: '310', name: '郑州动物园', category: OrganizationCategory.PARK, address: '郑州市金水区花园路18号', phone: '0371-65728466' },
      { id: '311', name: '月季公园', category: OrganizationCategory.PARK, address: '郑州市二七区大学南路88号', phone: '0371-67996666' },
      { id: '312', name: '南环公园', category: OrganizationCategory.PARK, address: '郑州市二七区南三环168号', phone: '0371-68897777' },
      { id: '313', name: '雕塑公园', category: OrganizationCategory.PARK, address: '郑州市金水区文化北路77号', phone: '0371-63698888' },
      { id: '314', name: '文博公园', category: OrganizationCategory.PARK, address: '郑州市金水区农业路6号', phone: '0371-65967777' },
      { id: '315', name: '郑东新区湿地公园', category: OrganizationCategory.PARK, address: '郑州市郑东新区龙湖外环南路', phone: '0371-66178888' },
      { id: '316', name: '郑州绿博园', category: OrganizationCategory.PARK, address: '郑州市中牟县人文路16号', phone: '0371-69681111' },
      { id: '317', name: '东风渠滨河公园', category: OrganizationCategory.PARK, address: '郑州市金水区东风渠沿岸', phone: '0371-63909999' },
      { id: '318', name: '金水河滨河公园', category: OrganizationCategory.PARK, address: '郑州市金水区金水河沿岸', phone: '0371-65908888' }
    ],
    [OrganizationCategory.MUSEUM]: [
      { id: '79', name: '河南博物院', category: OrganizationCategory.MUSEUM, address: '郑州市金水区农业路8号', phone: '0371-63511256' },
      { id: '80', name: '郑州博物馆', category: OrganizationCategory.MUSEUM, address: '郑州市中原区嵩山南路168号', phone: '0371-67438090' },
      { id: '81', name: '河南省地质博物馆', category: OrganizationCategory.MUSEUM, address: '郑州市金水区金水东路18号', phone: '0371-68108999' },
      { id: '82', name: '郑州自然博物馆', category: OrganizationCategory.MUSEUM, address: '郑州市郑东新区文苑西路16号', phone: '0371-65700001' },
      { id: '83', name: '黄河博物馆', category: OrganizationCategory.MUSEUM, address: '郑州市惠济区迎宾路402号', phone: '0371-65556712' }
    ],
    [OrganizationCategory.THEATER]: [
      { id: '84', name: '河南艺术中心', category: OrganizationCategory.THEATER, address: '郑州市郑东新区商务内环路1号', phone: '0371-69092222' },
      { id: '85', name: '郑州人民会堂', category: OrganizationCategory.THEATER, address: '郑州市金水区人民路1号', phone: '0371-66221955' },
      { id: '86', name: '河南省话剧院', category: OrganizationCategory.THEATER, address: '郑州市金水区文化路2号', phone: '0371-63896666' },
      { id: '87', name: '郑州青少年宫', category: OrganizationCategory.THEATER, address: '郑州市中原区中原路108号', phone: '0371-67655666' }
    ],
    [OrganizationCategory.SPORTS_CENTER]: [
      { id: '88', name: '河南省体育中心', category: OrganizationCategory.SPORTS_CENTER, address: '郑州市金水区长兴路38号', phone: '0371-63668888' },
      { id: '89', name: '郑州奥体中心', category: OrganizationCategory.SPORTS_CENTER, address: '郑州市中原区建设西路与西四环交叉口', phone: '0371-68886666' },
      { id: '90', name: '郑州体育馆', category: OrganizationCategory.SPORTS_CENTER, address: '郑州市金水区人民路1号', phone: '0371-66202661' },
      { id: '91', name: '中原网球中心', category: OrganizationCategory.SPORTS_CENTER, address: '郑州市中原区建设西路186号', phone: '0371-67889999' }
    ],
    [OrganizationCategory.MARKET]: [
      { id: '92', name: '丹尼斯百货人民路店', category: OrganizationCategory.MARKET, address: '郑州市金水区人民路2号', phone: '0371-66226666' },
      { id: '93', name: '正弘城', category: OrganizationCategory.MARKET, address: '郑州市金水区花园路126号', phone: '0371-69888888' },
      { id: '94', name: '万达广场二七店', category: OrganizationCategory.MARKET, address: '郑州市二七区大学南路125号', phone: '0371-55898888' },
      { id: '95', name: '华润万象城', category: OrganizationCategory.MARKET, address: '郑州市二七区民主路3号', phone: '0371-66668888' },
      { id: '96', name: '熙地港购物中心', category: OrganizationCategory.MARKET, address: '郑州市金水区农业东路与普惠路交叉口', phone: '0371-68186666' }
    ],
    [OrganizationCategory.HOTEL]: [
      { id: '97', name: '郑州索菲特国际饭店', category: OrganizationCategory.HOTEL, address: '郑州市金水区城东路289号', phone: '0371-65950000' },
      { id: '98', name: '郑州裕达国贸酒店', category: OrganizationCategory.HOTEL, address: '郑州市中原区中原中路220号', phone: '0371-67438888' },
      { id: '99', name: '郑州希尔顿酒店', category: OrganizationCategory.HOTEL, address: '郑州市金水区金水路288号', phone: '0371-68668888' },
      { id: '100', name: '郑州喜来登酒店', category: OrganizationCategory.HOTEL, address: '郑州市郑东新区农业南路与康宁路交叉口', phone: '0371-68088888' }
    ],
    [OrganizationCategory.GAS_STATION]: [
      { id: '101', name: '中石化郑州花园路加油站', category: OrganizationCategory.GAS_STATION, address: '郑州市金水区花园路88号', phone: '0371-65791234' },
      { id: '102', name: '中石油金水路加油站', category: OrganizationCategory.GAS_STATION, address: '郑州市金水区金水路123号', phone: '0371-65987654' },
      { id: '103', name: '壳牌中原西路加油站', category: OrganizationCategory.GAS_STATION, address: '郑州市中原区中原西路56号', phone: '0371-67654321' }
    ],
    [OrganizationCategory.PHARMACY]: [
      { id: '104', name: '张仲景大药房金水路店', category: OrganizationCategory.PHARMACY, address: '郑州市金水区金水路88号', phone: '0371-65998888' },
      { id: '105', name: '老百姓大药房', category: OrganizationCategory.PHARMACY, address: '郑州市金水区文化路68号', phone: '0371-63887777' },
      { id: '106', name: '大参林药房', category: OrganizationCategory.PHARMACY, address: '郑州市中原区桐柏南路178号', phone: '0371-67669999' },
      { id: '107', name: '国大药房', category: OrganizationCategory.PHARMACY, address: '郑州市二七区大学路98号', phone: '0371-67995555' }
    ],
    [OrganizationCategory.TELECOMMUNICATION]: [
      { id: '108', name: '中国移动营业厅金水路店', category: OrganizationCategory.TELECOMMUNICATION, address: '郑州市金水区金水路28号', phone: '0371-65991000' },
      { id: '109', name: '中国联通营业厅花园路店', category: OrganizationCategory.TELECOMMUNICATION, address: '郑州市金水区花园路18号', phone: '0371-65791000' },
      { id: '110', name: '中国电信营业厅中原路店', category: OrganizationCategory.TELECOMMUNICATION, address: '郑州市中原区中原路45号', phone: '0371-67661000' }
    ],
    [OrganizationCategory.INSURANCE]: [
      { id: '111', name: '中国人寿河南省分公司', category: OrganizationCategory.INSURANCE, address: '郑州市金水区农业路26号', phone: '0371-65955555' },
      { id: '112', name: '中国平安人寿郑州分公司', category: OrganizationCategory.INSURANCE, address: '郑州市金水区经三路68号', phone: '0371-63886666' },
      { id: '113', name: '太平洋保险河南分公司', category: OrganizationCategory.INSURANCE, address: '郑州市郑东新区商务外环路8号', phone: '0371-68097777' }
    ]
  }

  const handleCategoryClick = (categoryId: OrganizationCategory) => {
    setSelectedCategory(categoryId)
  }

  const handleOrganizationClick = (organization: Organization) => {
    if (onOrganizationSelect) {
      onOrganizationSelect(organization)
    }
  }

  const currentOrganizations = selectedCategory ? organizations[selectedCategory] : []

  return (
    <div className={styles.organizationPage}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>城市机构</h2>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="搜索机构或服务..."
          />
          <button className={styles.searchButton}>
            <span className={styles.searchIcon}>🔍</span>
            搜索
          </button>
        </div>
      </div>

      <div className={styles.contentLayout}>
        {/* 左侧分类树 */}
        <aside className={styles.categoryTree}>
          <h3 className={styles.categoryTitle}>机构分类</h3>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* 右侧机构列表 */}
        <main className={styles.organizationList}>
          <div className={styles.listHeader}>
            <h3 className={styles.listTitle}>
              {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : '全部机构'}
            </h3>
            <p className={styles.listSubtitle}>共找到 {currentOrganizations.length} 个机构</p>
          </div>

          <div className={styles.organizationGrid}>
            {currentOrganizations.map((organization) => (
              <div
                key={organization.id}
                className={`${styles.organizationCard} ${onOrganizationSelect ? styles.clickable : ''}`}
                onClick={() => handleOrganizationClick(organization)}
              >
                <div className={styles.cardHeader}>
                  <h4 className={styles.organizationName}>{organization.name}</h4>
                  {onOrganizationSelect && (
                    <span className={styles.clickIndicator}>点击查看详情 →</span>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.organizationAddress}>
                    <span className={styles.addressIcon}>📍</span>
                    {organization.address}
                  </p>
                  {organization.phone && (
                    <p className={styles.organizationPhone}>
                      <span className={styles.phoneIcon}>📞</span>
                      {organization.phone}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {currentOrganizations.length === 0 && (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🔍</span>
              <p>该分类下暂无机构信息</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default OrganizationPage