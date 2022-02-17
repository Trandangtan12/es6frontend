import ListCategory from "../../components/ListCategory";
import Header from "../../components/header";
import silderbar from "../../components/sliderbar"
const AdminCategoryPage = {
  async render() {
    return /*html*/ `
    <div class="container w-5/6 mx-auto">
    <div class="row">
  ${await silderbar.render()}
     
  
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Sản phẩm</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            
            
          </div>
        </div>
  
  
        
        <div class="table-responsive" id="list-categories">
          ${await ListCategory.render()};
        </div>
      </main>
    </div>
    </div>`;
  },
  async afterRender() {
    return ` 
    ${await ListCategory.afterRender()}
    ${await Header.afterRender()}`;
  },
};
export default AdminCategoryPage;
