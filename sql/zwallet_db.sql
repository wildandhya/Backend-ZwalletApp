-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2020 at 11:37 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `sender_id` int(11) NOT NULL,
  `reciever_id` int(11) NOT NULL,
  `trans_amount` int(11) NOT NULL,
  `notes` text NOT NULL,
  `transfer_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`sender_id`, `reciever_id`, `trans_amount`, `notes`, `transfer_date`) VALUES
(36, 23, 1000000, 'Sedekah', '2020-10-06 09:05:06'),
(36, 23, 1000, 'mantap', '2020-10-06 11:56:15'),
(0, 0, 0, '', '2020-10-06 11:57:03'),
(36, 23, 10000, 'bayar', '2020-10-06 12:33:04'),
(36, 38, 100008, 'gggb', '2020-10-06 12:34:01'),
(36, 23, 900, 'bamkdsaig', '2020-10-06 12:43:11'),
(36, 39, 8000, 'ganaggdlk', '2020-10-06 12:46:04'),
(36, 39, 8000, 'ganaggdlk', '2020-10-06 12:46:16'),
(36, 39, 8000, 'ganaggdlk', '2020-10-06 12:48:17'),
(36, 39, 8000, 'ganaggdlk', '2020-10-06 12:53:34'),
(36, 39, 8000, 'ganaggdlk', '2020-10-06 12:54:44'),
(36, 23, 10000, 'bayar ', '2020-10-06 12:59:45'),
(36, 23, 10000, 'mamama', '2020-10-06 13:02:44'),
(36, 23, 10000, 'mamama', '2020-10-06 13:03:31'),
(36, 23, 10000, 'mamama', '2020-10-06 13:03:58'),
(36, 23, 10000, 'mamama', '2020-10-06 13:05:21'),
(36, 23, 10000, 'mamama', '2020-10-06 13:05:50'),
(36, 39, 1000, 'kambing', '2020-10-06 13:20:54'),
(36, 37, 1000, 'babba', '2020-10-06 13:21:35'),
(36, 23, 12000, 'beli pulsa', '2020-10-07 09:25:02'),
(36, 40, 90000, 'bayar zakat', '2020-10-07 10:30:42'),
(23, 36, 20000, 'bayar  hutang', '2020-10-08 09:52:17'),
(23, 38, 10000, 'bayuard', '2020-10-08 11:48:30'),
(23, 38, 10000, 'bayuard', '2020-10-08 11:51:00'),
(23, 42, 20000, 'beli odading', '2020-10-08 11:56:46'),
(23, 36, 10000, 'bayartt', '2020-10-08 16:50:57'),
(36, 39, 10000, 'kalhs', '2020-10-08 22:21:29'),
(36, 39, 10000, 'kalhs', '2020-10-08 22:21:46'),
(23, 39, 10000, 'shedekah', '2020-10-09 00:27:24'),
(23, 38, 10000, '2000', '2020-10-09 00:30:23'),
(23, 38, 10000, '2000', '2020-10-09 00:31:57'),
(23, 39, 2000, 'kambing', '2020-10-09 01:36:58'),
(23, 38, 10000, 'ayam', '2020-10-09 02:01:56'),
(36, 23, 20000, '\'bayarrr naju', '2020-10-31 11:26:37'),
(23, 36, 20000, '\'bayarrr naju', '2020-10-31 11:31:17'),
(23, 36, 200000, 'asdffgahgsf', '2020-10-31 12:38:03'),
(23, 37, 20000, 'bayar kopi', '2020-10-31 13:06:11'),
(23, 38, 20000, 'bayar bb', '2020-10-31 13:47:55'),
(23, 38, 10000, 'akk', '2020-10-31 13:51:13'),
(23, 38, 20000, 'bayar', '2020-10-31 14:02:39'),
(23, 39, 20000, 'hagag', '2020-10-31 14:22:08'),
(23, 37, 100000, 'sd', '2020-10-31 15:38:06'),
(36, 23, 20000, '\'bayarrr naju', '2020-10-31 16:25:19'),
(37, 23, 20000, '\'bayarrr naju', '2020-10-31 16:40:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `pin`, `image`, `balance`, `phone_number`) VALUES
(23, 'Wildan Dhya', 'wildandhya15@gmail.com', '$2b$10$AnUe5EjogDySGcv5IZUC2OsY44/GPWyFX4LzikVJSYgF2nKHSBslC', '123456', 'http://localhost:8000/images/1602183614450-image.jpg', 119900, NULL),
(36, 'Gana Widja', 'ganawidja@gmail.com', '$2b$10$jGZ43TMAfXOIsqHgRJgX8uVaf2vKR9l2IO3l1nZWTJT.DkAS3g2oi', '112233', 'http://localhost:8000/images/1602170053630-image.jpg', 375092, NULL),
(37, 'Taupiq', 'taupiq@gmail.com', '$2b$10$rt2WdYqmjnKMiDS0AuN.8eS4BawxxiFfSj.ChguBtMVASYbdp46u.', '', 'http://localhost:8000/images/1601624710698-image.jpg', 101000, NULL),
(38, 'Yusup Junaedi', 'yusupjunaedi@gmail.com', '$2b$10$tLHhtliVx8xAKtLZV17JNeQ51pzyObzSMnUXy.YTxbi2FKcWdnBoG', '', 'http://localhost:8000/images/1601624672310-image.jpg', 200008, NULL),
(39, 'Faiz Sulistiawan', 'faizsulistiawan@gmail.com', '$2b$10$0irOyTrQV1rUByjax1DrsO1luE5R6xJvYeUU8Jc3CfDehc93E1Bfe', '', 'http://localhost:8000/images/1601624787807-image.jpg', 93000, NULL),
(40, 'Ahmad Zaky', 'ahmadzaky@gmail.com', '$2b$10$0GOBNSs5Y9PvM.UkBczBa.ObASrltLcBNWTUTAeRVjnsPH9Ay4SgG', '', 'http://localhost:8000/images/1601624808378-image.jpg', 90000, NULL),
(41, 'Nawi Rudin', 'nawirudin@gmail.com', '$2b$10$wwKJS8jgK1lIcCMkn2gvZuWlvq9UIudLINqQBeVSewZaWu4fjGz1.', '', 'http://localhost:8000/images/1601624691796-image.jpg', NULL, NULL),
(42, 'Sholehudin', 'sholehpisan@gmail.com', '$2b$10$UB9L0j4nFPLR21kuyg03yesWL.19DlTjgxVdX0t4SNk2R.Qkdf62.', '', 'http://localhost:8000/images/1601624763671-image.jpg', 20000, NULL),
(43, 'Amelia Gusti', 'ameliagusti@gmail.com', '$2b$10$jFcF5wLrgDLx87qTOd3Ah.6epE9rXXNn5JmhhNVG07yF0nRlMuUm.', '', 'http://localhost:8000/images/1601624728998-image.jpg', NULL, NULL),
(44, 'Bambang Pamungkas', 'bp@gmail.com', '$2b$10$HTdkHfhWdt4SfULSF4zTs.t.XcQXsdc3/URCbnSfl3ycMWt887EMS', '123456', NULL, NULL, NULL),
(45, 'Herman', 'herman@gmail.com', '$2b$10$2Jjcqh90qadtGr8mLJznbu3C5B60CqaZ0jGiZeqjjSi.aEvMS2WWG', '223344', 'http://localhost:8000/images/1602164680860-image.jpg', NULL, NULL),
(46, 'Fauzan Aulia', 'fauzan@gmail.com', '$2b$10$HtbgT5O3qISZ/dmHAhLCZOmfLQ6x0q4jhl7ltEYCfqt0WCZQaviRS', '123456', NULL, NULL, NULL),
(47, 'dhya wildan', 'dhya@gmail.com', '$2b$10$Q8zLojafnkPouETvL1R50uoU6AyR42jWv7OQzb7Tx1xYnOvTmD0qy', '123456', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_detail`
--

CREATE TABLE `users_detail` (
  `user_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_detail`
--
ALTER TABLE `users_detail`
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `image` (`image`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users_detail`
--
ALTER TABLE `users_detail`
  ADD CONSTRAINT `users_detail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
