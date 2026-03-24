import api from '../index'

export default {
  addSection: (
    sname: string,
    rid: number[] // Ensure rid is typed as an array of numbers
  ) => api.post('section', {
    sname,
    rid, // Rid is used directly here as a list
  }),
  getSectionList: (
    // uid: string,
  ) => api.get('sections', {
    // params: {
    //   uid
    // }
  }),
  getSectionById: (
    sid: string,
  ) => api.get('section/' + sid),
  deleteSection: (
    sid: string,
  ) => api.delete('section/' + sid),
  updateSection: (
    sid: string,
    sname: string,
  ) => api.put('section/' + sid, {
    sname,
  }),
  getResourceBySection: (
    sid: string,
  ) => api.get('section/' + sid + '/resources'),
  deleteSubResource: (
    sid: string,
    rid: string,
  ) => api.delete('section/' + sid + '/resource/' + rid),
  
}
