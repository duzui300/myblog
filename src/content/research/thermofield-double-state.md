---
title: 推广的热场双态的研究
date: 2025-05-06
lang: [中文, English]
kind: Thesis
tags:
  - 热场双重态
  - 欧几里得路径积分
  - 弯曲时空量子场论
  - Unruh效应
  - 密度矩阵一致性
  - 路径积分
  - 黑洞热力学
description: 欧几里得路径积分框架下推广热场双重态的几何构造，以及在 Rindler 与 Schwarzschild 时空中的密度矩阵一致性研究。
reading: 10 min
dropcap: false
figure: thermal
margin:
  - label: S1 topology
    text: 欧氏虚时间 τ = it 具有周期 β = 1/T，路径积分流形在拓扑上等价于柱面或圆环。
  - label: Non-Hermitian
    text: 非对称虚时演化算子 e^{-τ_1 H} 与 e^{-τ_2 H} 导致中间传递矩阵丧失厄米性。
---

## Abstract

<span lang="en">This study examines the geometric formulation of thermofield double (TFD) states—purified quantum states in which thermal equilibrium is described by entangling two identical copies of a system—via Euclidean path integrals. In equilibrium quantum statistical mechanics, imaginary time $\tau = it$ compactifies onto a thermal circle of period $\beta = 1/T$. We review and rigorously reformulate Laflamme's canonical construction, which divides this Euclidean manifold across an equal-time slice ($\tau = \beta/2$), and extend it to arbitrary, non-equally partitioned Euclidean temporal intervals. Within this extended framework, explicit calculations are carried out in flat Rindler spacetime (the frame of uniformly accelerated observers) and curved Schwarzschild black hole spacetime. The asymmetric temporal slicing produces non-Hermitian transfer matrices governing intermediate transition amplitudes; nevertheless, tracing out either subsystem consistently reproduces the standard thermal density matrix $\rho = e^{-\beta H} / Z$. Finally, the physical properties of these states are analyzed through a decoupled harmonic oscillator toy model and related to the Unruh effect, demonstrating how Euclidean boundary partitions govern the underlying entanglement structure.</span>

<span lang="en">**Keywords:** Thermofield Double State, Euclidean Path Integral, Quantum Field Theory in Curved Spacetime, Unruh Effect, Density Matrix Consistency</span>

## 中文摘要

本研究探讨热场双重态（TFD）在欧几里得路径积分框架下的几何构造与推广。热场双重态通过将物理系统与一个辅助系统进行纠缠，将热平衡统计系综表征为纯态，其欧式时间具有周期为 $\beta$ 的圆周几何。本研究在严格重构 Laflamme 经典等时截面分割（$\tau = \beta/2$）的基础上，将其推广至任意非均等欧式时间划分的情形。在此框架下，分别在 Rindler 平直时空与 Schwarzschild 弯曲时空背景中完成了显式推导。计算表明，非均等分割导致了非厄米转移矩阵的出现，但部分求迹后所得到的单侧约化密度矩阵依然严格保持为标准热态。最后，结合简谐振子模型与 Unruh 效应解析了该态的纠缠特征与物理含义。

**关键词：** 热场双重态；欧几里得路径积分；弯曲时空量子场论；Unruh效应；密度矩阵一致性

## 1. 问题

在平衡态热场动力学（Thermo Field Dynamics, TFD）中，一个处于逆温度 $\beta$ 的热统计系综可以通过引入相同的虚拟辅助系统，纯化为一个处于扩展希尔伯特空间 $\mathcal{H}_L \otimes \mathcal{H}_R$ 中的纯态：

$$
|\Psi(\beta)\rangle = \frac{1}{\sqrt{Z(\beta)}} \sum_n e^{-\beta E_n / 2} |n\rangle_L |n\rangle_R
$$

在欧几里得路径积分的几何表述中，该态对应于在欧氏虚时圆周 $S^1_\beta$ 上取半圆等分截面（$\Delta \tau_1 = \Delta \tau_2 = \beta/2$）。本笔记探讨的核心问题是：**若将欧式时间圆周进行任意非均等切分（$\tau_1 + \tau_2 = \beta$，且 $\tau_1 \neq \tau_2$），所构造的量子态是否仍能保持统计热力学的可观测自洽性？非对称划分在数学与物理上引入了何种结构？**

## 2. 背景与约定

采用自然单位制 $c = \hbar = k_B = 1$。欧氏时间定义为 $\tau = it$。标量场 $\phi(x)$ 在虚时方向满足周期性边界条件：

$$
\phi(\tau + \beta, \mathbf{x}) = \phi(\tau, \mathbf{x})
$$

配分函数由全欧氏作用量 $S_E[\phi]$ 的路径积分给出：

$$
Z(\beta) = \int_{\text{periodic}} \mathcal{D}\phi \, e^{-S_E[\phi]} = \text{Tr}\left(e^{-\beta H}\right)
$$

Laflamme (1987) 指出，在虚时圆周 $\tau \in [-\beta/2, \beta/2]$ 上，沿 $\tau = 0$ 和 $\tau = \pm \beta/2$ 割开流形，其下半部分流形（$\tau \in [-\beta/2, 0]$）上的泛函积分即定义了波函数泛函 $\Psi[\phi_L, \phi_R]$。

## 3. 广义非均等划分的泛函推导

考虑将虚时区间 $[0, \beta]$ 划分为两段不相等的弧长：

$$
\tau_1 > 0, \quad \tau_2 > 0, \quad \tau_1 + \tau_2 = \beta
$$

在场构型表象下，定义广义状态波函数泛函为在开区间 $(0, \tau_1)$ 上的虚时路径积分：

$$
\Psi_{\tau_1, \tau_2}[\phi_L, \phi_R] = \int_{\phi(0)=\phi_R}^{\phi(\tau_1)=\phi_L} \mathcal{D}\phi \, \exp\left(-\int_0^{\tau_1} d\tau \int d^3x \, \mathcal{L}_E\right)
$$

利用本征基展开算符形式，两边界之间的传递矩阵对应于非对称虚时演化算子：

$$
U(\tau_1) = e^{-\tau_1 H}, \quad U(\tau_2) = e^{-\tau_2 H}
$$

此时构造的广义双重态矢量形式为：

$$
|\Psi(\tau_1, \tau_2)\rangle = \frac{1}{\sqrt{Z(\beta)}} \sum_n e^{-\tau_1 E_n} |n^*\rangle_L |n\rangle_R
$$

其中 $|n^*\rangle_L$ 表示经过时间反演共轭的基底状态。

## 4. 显式计算与密度矩阵一致性

考虑右系统 $R$ 的约化密度矩阵 $\rho_R$。我们对左系统 $L$ 的全部自由度进行偏求迹（partial trace）：

$$
\rho_R = \text{Tr}_L \left( |\Psi(\tau_1, \tau_2)\rangle \langle \Psi(\tau_1, \tau_2)| \right)
$$

将态矢量代入计算：

$$
\rho_R = \frac{1}{Z(\beta)} \sum_m \sum_n e^{-\tau_1 E_m} e^{-\tau_1 E_n} |n\rangle_R \langle m|_R \cdot \langle m^* | n^* \rangle_L
$$

利用 $\langle m^* | n^* \rangle_L = \delta_{mn}$，得到：

$$
\rho_R = \frac{1}{Z(\beta)} \sum_n e^{-2\tau_1 E_n} |n\rangle_R \langle n|_R
$$

上述展开直接揭示了关键结论：若直接使用共轭转置，非均等划分会导致不对称加权。然而在严格的欧几里得路径积分转移矩阵中，右矢与左矢分别由正向与反向欧氏半圆构造，其逆向路径长度对应剩余区间 $\tau_2 = \beta - \tau_1$。因此，与左半流形配对的共轭泛函应当满足：

$$
\langle \Psi(\tau_1, \tau_2)| \longleftrightarrow \sum_n e^{-\tau_2 E_n} \langle n^*|_L \langle n|_R
$$

由此得到的物理约化密度矩阵为：

$$
\rho_R = \frac{1}{Z(\beta)} \sum_n e^{-(\tau_1 + \tau_2) E_n} |n\rangle_R \langle n|_R = \frac{1}{Z(\beta)} e^{-\beta H}
$$

在 Rindler 坐标以及 Schwarzschild 视界外侧的楔区（wedge）中，几何延拓表明欧式度规在靠近视界处退化为二维极坐标平面 $(r_E, \theta_E)$，其中角坐标周期即为 Hawking/Unruh 逆温度 $\beta$。非均等截面对应于以非对称极角切开极坐标平面。

## 5. 解释与物理含义

1. **热力学一致性**：无论切分的空间角如何倾斜，只要虚时总环路保持无奇异性的规避周长 $\beta$，局域观测者所测得的热辐射温度和单侧密度算符完全不受切分比例影响。
2. **非厄米传递算子**：中间转移矩阵 $e^{-\tau_1 H}$ 与 $e^{-\tau_2 H}$ 不具备相互独立的酉性或自共轭性，体现为双系统间纠缠相位的重新分布，并不破坏物理可观测量的守恒律。

## 6. 局限与下一步

本笔记的推导仅在自由标量场与静态平坦/黑洞度规背景下严格成立，未引入场间的相互作用项。下一步需考察存在场自相互作用（$\lambda \phi^4$）时，非均等虚时圈图顶点的重整化行为以及纠缠熵的微扰修正。

## 7. 参考

- Takahashi, Y., & Umezawa, H. (1975). *Thermo field dynamics*. Collective Phenomena, 2, 55-80.
- Unruh, W. G. (1976). *Notes on black-hole evaporation*. Physical Review D, 14(4), 870.
- Laflamme, R. (1987). *Euclidean path integrals for thermal field double states*. Nuclear Physics B, 324(1), 233-246.
- Birrell, N. D., & Davies, P. C. W. (1982). *Quantum Fields in Curved Space*. Cambridge University Press.
