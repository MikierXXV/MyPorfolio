---
title: Data Mining Projects
publishDate: 2019-10-02 00:00:00
img: /MyPorfolio/assets/datamining/Gendergapsalary.png
img_alt: Gender salary gap logo
description: |
  Gender salary gap analysis and NBA player position predictions.
tags:
  - Data Mining
  - Python
  - R
---

<h2 class="center"> Introduction </h2>
<p>These are two projects, developed with a team of 4, related to MD subject where we have done an analysis of a gender salary gap dataset from Kaggle and some predictions in a NBA dataset.</p>

<h2 class="center"> Development Gender Pay Gap </h2>
<p>In this project our goal was to detect which were the variables, or at least, the main reason of the existence of this difference. The language used for the development was R. It allow us to preprocess the dataset, apply some clustering and PCA and make profilings for the data interpretation.</p>

<h2 class="center"> Conclusions </h2>
<p>Finally we discover, by the analysis in this dataset, that being white, married and with a high degree is prone to have a better wage. Moreover being male seems to increase this wage.</p>


<img class="images" height="500" width="650"  alt="Basketball court positions" src="/assets/datamining/basketpos.png"/>

<h2 class="center"> Development NBA players</h2>
<p>In this project our goal was to predict players positions by the proximity of their roles in the court. We have preprocessed our dataset from Kaggle to divide the five positions into 2 groups, so the "close" one, respect the basket, is composed by PF and C, while "away" group includes PG, SG and SF. We applied some of the data mining algorithms to see which fits our dataset the best. These were the algorithms: Naive Bayes, KNN, Decision Trees, SVM and Meta-learning. </p>

<h2 class="center"> Conclusions </h2>
<p>Finally we saw that the ones that fits better was the Meta-learning algorithm using the voting scheme with weights. The predictions were very similar between the other ones, but here the accuracy was the highest.</p>


<style> 
  p {
    text-align: justify;
    margin-bottom: 2rem;
  }

  .center {
    text-align: center;
  }
</style>