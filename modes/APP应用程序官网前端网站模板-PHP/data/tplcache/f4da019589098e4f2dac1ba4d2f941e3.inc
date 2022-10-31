<div class="single-blog-inner"> 
            <!-- blog image -->
            <div class="post-image"> <a href="[field:arcurl/]"> <img src="[field:litpic/]" alt=""> </a>
              <div class="post-date">
                <p><span>[field:pubdate function='strftime("%m-%d",@me)'/]</span>[field:pubdate function='strftime("%Y",@me)'/]</p>
              </div>
            </div>
            <!--/.End of  blog image --> 
            
            <!-- post content -->
            <div class="post-content">
              <div class="post-details">
                <div class="post-info d-flex"><span>[field:pubdate function='strftime("%Y-%m-%d",@me)'/]</span></div>
                <div class="post-title">
                  <h3><a href="[field:arcurl/]">[field:title/]</a></h3>
                </div>
                <p>[field:description function='cn_substr(@me,250)'/]...</p>
                <a class='btn' href="[field:arcurl/]">Read More</a> </div>
            </div>
            <!-- /.End of post content --> 
          </div>