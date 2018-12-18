-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-18 03:22:35
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
-- Database: `1605a`
--

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) NOT NULL,
  `create_time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `phone`, `address`, `avatar`, `create_time`) VALUES
(4, 'chenmanjie', '09bf00354c92eb10413126d27e22449c', NULL, '17621526606', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099198781'),
(5, 'zhenglong', '1d7f03764ca121e6a18471c914aa333b', NULL, '13381045200', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099502629'),
(6, 'mfc506321322', '432b22d6e5d3274f8c124b05b5ae31cd', NULL, '15623364233', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099504045'),
(7, 'liujingxue', '9771efc7bdb4c6df002b268590bd10cb', NULL, '13199502226', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099506731'),
(8, 'renkehao', 'a38b47a82af000d1079e075c6eed7eb6', NULL, '18515355836', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099507382'),
(9, 'cfr328', '02ff67b6e8b612fe5b91f8903dcae3fa', NULL, '18235608463', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099510026'),
(10, '17746570095', '3c6f1fcd3c348dad98f4069b02b0a8c1', NULL, '17746570095', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099511594'),
(11, 'zhangyu', '1732bff7fbf150ac69b89295ffb6f96a', NULL, '16619940015', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099513776'),
(12, 'wangyuru', '9a0e2f159fdf845210d89134d5091ef5', NULL, '13503509552', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099514837'),
(13, 'zyy', '093216c08f0505bc21bbffce1a824fb2', NULL, '15712879695', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099523706'),
(14, 'youmingxin', 'e415e32326a32c1ea2efadfbc94298ef', NULL, '18310870677', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099525177'),
(15, 'wangshuo', 'b463dba0922bf5389c5be8fe91c39420', NULL, '16619932979', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099527522'),
(16, '18301120572', 'd6224f847f99b073157e04e339bb1d4b', NULL, '18301120572', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099527620'),
(17, 'amy', '65628eace045400cbbd48229dceb4a90', NULL, '18811126840', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099528243'),
(18, 'sunShine', '38ce5a4f486625bc44bb86f58b91ace8', NULL, '13001037791', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099528997'),
(19, 'wangyinshan', '7d4bb14550623a1f40d3d12864751693', NULL, '17611351917', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099532525'),
(20, 'cfr328', '02ff67b6e8b612fe5b91f8903dcae3fa', NULL, '13934318787', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099533678'),
(21, 'wym', '0ffe4f3708e9086896510da5ba78bf72', NULL, '17611383686', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099557696'),
(22, 'guchangcheng', '055aefb43a892bf9c2b5daab9a9cf9c1', NULL, '18336623497', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099563670'),
(23, 'oliver', '4a8d45d5a4de976165626799b7a4f6fc', NULL, '17626181997', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099564571'),
(24, 'chenmeifeng', '16b1bf76b1a15d9149bbb2fcecfe9ae4', NULL, '18410105520', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099567426'),
(25, 'niubi666', '09bf00354c92eb10413126d27e22449c', NULL, '13838384388', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099586536'),
(26, 'wym', '0ffe4f3708e9086896510da5ba78bf72', NULL, '17611388979', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099612219'),
(27, 'sunShine', '38ce5a4f486625bc44bb86f58b91ace8', NULL, '13001037795', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099620257'),
(28, 'niubi666', '09bf00354c92eb10413126d27e22449c', NULL, '13838384381', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099627360'),
(29, 'AsDragon', 'cbac7021b952879be663249564b22ab0', NULL, '13908683718', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099696275'),
(30, 'ningyanze', '893deb9576ca8140f1ef6f48c5e3e3fb', NULL, '18210249690', NULL, 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg', '1545099716818');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
