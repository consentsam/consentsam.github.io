---
title: Can we download Bitcoin Blocks faster with Torrent?
description: This blog summaries a experiment to check whether bitcoin blocks can be downloaded faster with torrent?
image: https://raw.githubusercontent.com/consentsam/consentsam.github.io/master/public/static/images/bitcoin-torrent.jpeg
date: '2022-04-02'
author: content/author/satyajeet-sindhiyani.md
categories:
    - Blockchain
tags:
    - Bitcoin
---

## Context

<!-- Can-we-download-Bitcoin-Blocks-faster-with-Torrent? -->

Today, when I was reading [Greg Walker](https://learnmeabitcoin.com/about) 's blog to understand some basics about Bitcoin and there I saw this line

> Once you have downloaded and verified the full blockchain **(currently 389.74 GB)**, you can start making your own transactions, which propagate the network and are written to the blockchain on everyone’s computer.

So, out of curiosity I went to download the [Bitcoin-core app](https://bitcoin.org/en/download) and when the blockchain data started to download, I was stunned to see that it will take my computer around 4 days just to download the whole blockchain data before I can start doing anything.

![Blockchain Data Download 4 Days](https://raw.githubusercontent.com/consentsam/consentsam.github.io/master/public/static/images/block_download_four_days.png)

This is unacceptable to me since I am on 100 Mbps internet plan. It should have taken at max 1-1.5 days to download the whole data but it is way too much.Then I wondered whether we can do anything to fasttrack this process.

## Idea

Why do not I download the whole data from torrent and then keep that data into the correct bitcoin directory to fast track this process?

## Issue

After reading some reading articles on the same, I came to know that even after we do that, it won't fasten the process.

## Why?

We cannot do much faster than that because it is not the download that is taking so long, it is the **verification/validation** of the blocks that is taking a lot of time. Moreover, Bitcoin-core is a P2P software, it already implements the same technology that torrent implements to download the files. So, the time taken will be same in both the cases.
