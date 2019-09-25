#!/usr/bin/env python3

from math import pi

LATITUDE_OF_NORTHERN_TROPIC = (23.43673 / 180 * pi)
LATITUDE_OF_SOUTHERN_TROPIC = (-23.43673 / 180 * pi)

DISK_EXTENSION = 0.25
DISK_TIMERING_THICKNESS = 0.2

SOLAR_TERMS = [
    "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
    "立夏", "小满", "芒种", "夏至", "小暑", "大暑",
    "立秋", "处暑", "白露", "秋分", "寒露", "霜降",
    "立冬", "小雪", "大雪", "冬至", "小寒", "大寒"
]

STARMARK_ADJUST = {
                # deltaRA, deltaDE
    "50Alp UMa": (0, +0.15),
    "85Eta UMa": (0, -0.03),
    "77Eps UMa": (0, -0.03),
    "32Alp Leo": (+0.08, -0.03),
    "58Alp Ori": (-0.13, +0.05),
    "24Gam Ori": (+0.12, +0.05),
    "19Bet Ori": (+0.10, +0.05),
    "46Eps Ori": (-0.12, +0.03),
    "16Alp Boo": (0, -0.03),
    "3Alp Lyr" : (0.13, -0.03),
    "53Alp Aql": (-0.13, +0.02),
    "13Alp Aur": (+0.13, +0.18),
    "34Bet Aur": (-0.22, 0),
    "66Alp Gem": (-0.22, +0.1),
    "78Bet Gem": (-0.20, +0.06),
    "24Gam Gem": (+0.14, +0.05),
    "112Bet Tau": (-0.18, +0.07),
    "9Alp CMa": (+0.02, +0.10),
    "2Bet CMa": (+0.04, +0.01),
    "30Alp Hya": (+0.05, 0),
}
