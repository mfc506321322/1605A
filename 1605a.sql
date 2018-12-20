-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-20 06:48:33
-- 服务器版本： 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yuening`
--

-- --------------------------------------------------------

--
-- 表的结构 `access`
--

CREATE TABLE `access` (
  `id` int(11) NOT NULL,
  `accessname` varchar(10) NOT NULL,
  `info` varchar(20) NOT NULL,
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `access`
--

INSERT INTO `access` (`id`, `accessname`, `info`, `create_time`) VALUES
(1, 'edit', '文章编辑功能', '1540273946652'),
(2, 'adm', '管理员权限', '1540273946652');

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(500) NOT NULL,
  `num` int(11) NOT NULL,
  `rent` int(11) NOT NULL DEFAULT '0',
  `returning` int(11) NOT NULL DEFAULT '0',
  `info` text,
  `status` int(11) NOT NULL DEFAULT '1',
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `goods_order`
--

CREATE TABLE `goods_order` (
  `id` int(11) NOT NULL,
  `oid` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `create_time` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1表示有效，0表示无效'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `phone_code`
--

CREATE TABLE `phone_code` (
  `id` int(11) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `code` int(6) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1表示有效，0表示失效',
  `create_time` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `phone_code`
--

INSERT INTO `phone_code` (`id`, `phone`, `code`, `status`, `create_time`) VALUES
(2, '17621526605', 878421, 0, '1540188239509'),
(3, '17621526605', 842499, 0, '1540188825224'),
(4, '17621526605', 545845, 0, '1540188843808'),
(5, '17621526605', 674544, 0, '1540189719917'),
(6, '15011512222', 253005, 1, '1540194850880'),
(7, '15011512222', 527338, 1, '1540195138463'),
(8, '13522757621', 803743, 0, '1540196629532'),
(9, '13522757621', 675473, 0, '1540196931341'),
(10, '13522757621', 507811, 0, '1540196976593'),
(11, '13522757621', 598330, 0, '1540197037810'),
(12, '13522757621', 853525, 0, '1540197169872'),
(13, '17621526605', 415389, 0, '1540256411560'),
(14, '17621526605', 225302, 0, '1540257157641'),
(15, '13522757621', 755984, 0, '1540281386318'),
(16, '15313136838', 758674, 1, '1540281513260');

-- --------------------------------------------------------

--
-- 表的结构 `rent_order`
--

CREATE TABLE `rent_order` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `orderNu` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1表示未发货，2表示已发货，3表示完成',
  `shipName` int(11) NOT NULL,
  `logisticCode` int(11) NOT NULL,
  `create_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `roler`
--

CREATE TABLE `roler` (
  `id` int(11) NOT NULL,
  `rolername` varchar(10) NOT NULL,
  `info` varchar(20) NOT NULL,
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `roler`
--

INSERT INTO `roler` (`id`, `rolername`, `info`, `create_time`) VALUES
(1, 'admin', '超级管理员', '1540273946652'),
(2, 'staff', '员工', '1540273946652');

-- --------------------------------------------------------

--
-- 表的结构 `roler_access`
--

CREATE TABLE `roler_access` (
  `id` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `roler_access`
--

INSERT INTO `roler_access` (`id`, `rid`, `aid`, `status`, `create_time`) VALUES
(1, 1, 1, 1, '1540273946652'),
(2, 1, 2, 1, '1540273946652');

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE `shop` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `img` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `info` text NOT NULL,
  `count` int(11) NOT NULL DEFAULT '0',
  `city` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '//1 表示正常，2 表示关闭，3表示审核中',
  `income` int(11) NOT NULL DEFAULT '0',
  `create_time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shop`
--

INSERT INTO `shop` (`id`, `name`, `img`, `address`, `info`, `count`, `city`, `status`, `income`, `create_time`) VALUES
(1, '西北旺地铁站店点点西北旺地铁站店点点西北旺地铁站店点点', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 2, 0, '1542162373478'),
(2, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542163295058'),
(3, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542163309898'),
(4, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542163507463'),
(5, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542163534789'),
(6, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542163884684'),
(7, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542164525651'),
(8, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542164553194'),
(9, '西北旺地铁站店', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335904164,4046861908&fm=200&gp=0.jpg', '的技能法律', '靠近各大地铁站的书籍租赁点,方便广大用户租书捐书,让知识传播开来', 0, '北京市', 1, 0, '1542164661397');

-- --------------------------------------------------------

--
-- 表的结构 `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `token` varchar(32) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `token`
--

INSERT INTO `token` (`id`, `uid`, `token`, `status`, `create_time`) VALUES
(1, 26, 'u26_919b3180231cec0b0a3b3775510f', 1, '1542077963704'),
(2, 26, 'u26_93878ef4af97b161891fe25cae97', 1, '1542078569611'),
(3, 30, 'u30_2fe76aa20cb6db46bcd8e8aac41f', 1, '1542079070722'),
(4, 31, 'u31_acba998822c1271e394808a3a332', 1, '1542079093115');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL,
  `type` int(1) NOT NULL DEFAULT '1' COMMENT '1表示普通用户，2表示普通员工',
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) NOT NULL,
  `create_time` varchar(20) NOT NULL,
  `profile` varchar(100) DEFAULT NULL COMMENT '个人简介',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1表示有效，0表示无效',
  `province` varchar(100) NOT NULL DEFAULT '北京',
  `city` varchar(100) NOT NULL DEFAULT '北京'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `phone`, `address`, `avatar`, `create_time`) VALUES
(4, 'chenmanjie', '09bf00354c92eb10413126d27e22449c', NULL, '17621526606', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099198781'),
(5, 'zhenglong', '09bf00354c92eb10413126d27e22449c', NULL, '13381045200', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099502629'),
(6, 'mfc506321322', '09bf00354c92eb10413126d27e22449c', NULL, '15623364233', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099504045'),
(7, 'liujingxue', '09bf00354c92eb10413126d27e22449c', NULL, '13199502226', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099506731'),
(8, 'renkehao', '09bf00354c92eb10413126d27e22449c', NULL, '18515355836', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099507382'),
(9, 'cfr328', '09bf00354c92eb10413126d27e22449c', NULL, '18235608463', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099510026'),
(10, '17746570095', '09bf00354c92eb10413126d27e22449c', NULL, '17746570095', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099511594'),
(11, 'zhangyu', '09bf00354c92eb10413126d27e22449c', NULL, '16619940015', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099513776'),
(12, 'wangyuru', '09bf00354c92eb10413126d27e22449c', NULL, '13503509552', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099514837'),
(13, 'zyy', '09bf00354c92eb10413126d27e22449c', NULL, '15712879695', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099523706'),
(14, 'youmingxin', '09bf00354c92eb10413126d27e22449c', NULL, '18310870677', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099525177'),
(15, 'wangshuo', '09bf00354c92eb10413126d27e22449c', NULL, '16619932979', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099527522'),
(16, '18301120572', '09bf00354c92eb10413126d27e22449c', NULL, '18301120572', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099527620'),
(17, 'amy', '09bf00354c92eb10413126d27e22449c', NULL, '18811126840', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099528243'),
(18, 'sunShine', '09bf00354c92eb10413126d27e22449c', NULL, '13001037791', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099528997'),
(19, 'wangyinshan', '09bf00354c92eb10413126d27e22449c', NULL, '17611351917', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099532525'),
(20, 'cfr328', '09bf00354c92eb10413126d27e22449c', NULL, '13934318787', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099533678'),
(21, 'wym', '09bf00354c92eb10413126d27e22449c', NULL, '17611383686', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099557696'),
(22, 'guchangcheng', '09bf00354c92eb10413126d27e22449c', NULL, '18336623497', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099563670'),
(23, 'oliver', '09bf00354c92eb10413126d27e22449c', NULL, '17626181997', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099564571'),
(24, 'chenmeifeng', '09bf00354c92eb10413126d27e22449c', NULL, '18410105520', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099567426'),
(25, 'niubi666', '09bf00354c92eb10413126d27e22449c', NULL, '13838384388', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099586536'),
(26, 'wym', '09bf00354c92eb10413126d27e22449c', NULL, '17611388979', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099612219'),
(27, 'sunShine', '09bf00354c92eb10413126d27e22449c', NULL, '13001037795', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099620257'),
(28, 'niubi666', '09bf00354c92eb10413126d27e22449c', NULL, '13838384381', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099627360'),
(29, 'AsDragon', '09bf00354c92eb10413126d27e22449c', NULL, '13908683718', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099696275'),
(30, 'ningyanze', '09bf00354c92eb10413126d27e22449c', NULL, '18210249690', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099716818'),
(33, 'chenmanjie', '123456', NULL, '17621526605', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545196071456');

-- --------------------------------------------------------

--
-- 表的结构 `user_roler`
--

CREATE TABLE `user_roler` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  `status` int(11) DEFAULT '1',
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_roler`
--

INSERT INTO `user_roler` (`id`, `uid`, `rid`, `status`, `create_time`) VALUES
(1, 26, 1, 1, '1540273946652'),
(2, 1, 2, 1, '1540273946652');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phone_code`
--
ALTER TABLE `phone_code`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rent_order`
--
ALTER TABLE `rent_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roler`
--
ALTER TABLE `roler`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roler_access`
--
ALTER TABLE `roler_access`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roler`
--
ALTER TABLE `user_roler`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `access`
--
ALTER TABLE `access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `phone_code`
--
ALTER TABLE `phone_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用表AUTO_INCREMENT `rent_order`
--
ALTER TABLE `rent_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `roler_access`
--
ALTER TABLE `roler_access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用表AUTO_INCREMENT `user_roler`
--
ALTER TABLE `user_roler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
