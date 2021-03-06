const Thesis = require('../models/thesis');


let TYPE = 'Thesis';

class AccessThesis {
    constructor() {
        this.addThesis = addThesis;
        this.updateThesis = updateThesis;
        this.getNumberOfThesis = getNumberOfThesis;
        this.getThesisByArea = getThesisByArea;
        this.addThesisArray = addThesisArray;
        this.getThesis = getThesis;
        this.getThesisById = getThesisById;
        this.getThesisRecomendation = getThesisRecomendation;
        this.incrementClicks = incrementClicks;
        this.removeThesis = removeThesis;
        this.asyncAddThesis = asyncAddThesis;
        this.asyncAddThesisSpecialization = asyncAddThesisSpecialization;
        this.getThesisRecomendationByAdvisor = getThesisRecomendationByAdvisor;
        this.getThesisRecomendationByAreaAndAdvisor = getThesisRecomendationByAreaAndAdvisor;
        this.getThesesByFenixCourse = getThesesByFenixCourse;
    }
}

let access_thesis = module.exports = exports = new AccessThesis();


/********************************
 *  C.R.U.D. FUNCTIONS
 *******************************/
function addThesis(id, title, supervisors, vacancies, location, courses,
                   observations, objectives, status, requirements, areas,
                   clicks, type, lastModified) {
    Thesis.find(
      {
          id: id
      }, (err, thesis) =>   {


          if (thesis[0]) {
              if (thesis[0].title === title && thesis[0].supervisors === supervisors &&
                thesis[0].vacancies === vacancies && thesis[0].observations === observations &&
                thesis[0].objectives === objectives && thesis[0].status === status && thesis[0].requirements === requirements
                && thesis[0].areas=== areas)  {
              }

              if (thesis[0].title !== title) {
                  Thesis.updateOne({ id: id }, { $set: { title: title }}, (err,result) =>  {
                                        });
              }
              if (thesis[0].supervisors !== supervisors) {
                  Thesis.updateOne({ id: id }, { $set: { supervisors: supervisors }}, (err,result) =>  {

                  });
              }
              if (thesis[0].vacancies !== vacancies) {
                  Thesis.updateOne({ id: id }, { $set: { vacancies: vacancies }}, (err,result) =>  {
                  });
              }
              if (thesis[0].observations !== observations) {
                  Thesis.updateOne({ id: id }, { $set: { observations: observations }}, (err,result) =>  {

                  });
              }
              if (thesis[0].objectives !== objectives) {
                  Thesis.updateOne({ id: id }, { $set: { objectives: objectives }}, (err,result) =>  {

                  });
              }
              if (thesis[0].status !== status) {
                  Thesis.updateOne({ id: id }, { $set: { status: status }}, (err,result) =>  {

                  });
              }
              if (thesis[0].requirements !== requirements) {
                  Thesis.updateOne({ id: id }, { $set: { requirements: requirements }}, (err,result) =>  {

                  });
              }

              if (thesis[0].areas !== areas) {
                  Thesis.updateOne({ id: id }, { $set: { areas: areas }}, (err,result) =>  {

                  });
              }
          } else    {

              let newThesis = new Thesis({
                  id: id,
                  title: title,
                  supervisors: supervisors,
                  vacancies: vacancies,
                  location: location,
                  courses: courses,
                  observations: observations,
                  objectives: objectives,
                  status: status,
                  requirements: requirements,
                  areas: areas,
                  type: type,
                  clicks: clicks,
                  lastModified: lastModified
              });

              newThesis.save((err,result)=>   {

              });
          }

      });

}

async function asyncAddThesis(id, title, supervisors, vacancies, location, courses,
                   observations, objectives, status, requirements, areas,
                   clicks, type, lastModified, callback) {
    Thesis.find(
        {
            id: id
        }, (err, thesis) =>   {
            if (err)  {
               return new Error(err);
            }
            if (thesis[0]) {
                if (thesis[0].title === title && thesis[0].supervisors === supervisors &&
                    thesis[0].vacancies === vacancies && thesis[0].observations === observations &&
                    thesis[0].objectives === objectives && thesis[0].status === status && thesis[0].requirements === requirements
                    && thesis[0].areas=== areas)  {
                    return;
                }

                if (thesis[0].title !== title) {
                    Thesis.updateOne({ id: id }, { $set: { title: title }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].supervisors !== supervisors) {
                    Thesis.updateOne({ id: id }, { $set: { supervisors: supervisors }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].vacancies !== vacancies) {
                    Thesis.updateOne({ id: id }, { $set: { vacancies: vacancies }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].observations !== observations) {
                    Thesis.updateOne({ id: id }, { $set: { observations: observations }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].objectives !== objectives) {
                    Thesis.updateOne({ id: id }, { $set: { objectives: objectives }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].status !== status) {
                    Thesis.updateOne({ id: id }, { $set: { status: status }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].requirements !== requirements) {
                    Thesis.updateOne({ id: id }, { $set: { requirements: requirements }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }

                if (thesis[0].areas !== areas) {
                    Thesis.updateOne({ id: id }, { $set: { areas: areas }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
            } else    {

                let newThesis = new Thesis({
                    id: id,
                    title: title,
                    supervisors: supervisors,
                    vacancies: vacancies,
                    location: location,
                    courses: courses,
                    observations: observations,
                    objectives: objectives,
                    status: status,
                    requirements: requirements,
                    areas: areas,
                    type: type,
                    clicks: clicks,
                    lastModified: lastModified
                });

                newThesis.save((err,result)=>   {
                    console.log(err);
                    if (err)  {
                        return new Error(err);
                    } else    {
                        return result;
                    }
                });
            }

        });
}

function addThesisArray(thesesArray, callback) {
    const NumberTheses = thesesArray.theses.length;
    let stats = {
        loaded: NumberTheses,
        unchanged: 0,
        modified: 0,
        added: 0
    };
    for (let i = 0; i < NumberTheses; i++) {
        addThesis(thesesArray.theses[i].id, thesesArray.theses[i].title, thesesArray.theses[i].supervisors,
          thesesArray.theses[i].vacancies, thesesArray.theses[i].location, thesesArray.theses[i].courses,
          thesesArray.theses[i].observations, thesesArray.theses[i].objectives, thesesArray.theses[i].status,
          thesesArray.theses[i].requirements, thesesArray.theses[i].areas, 0, thesesArray.theses[i].type,
          new Date(), (err, result) => {
              if (err) {
                  console.log(err);
                  reject(err);
              } else {
                  if (result.nModified === 1)   {
                      stats.modified++;
                  } else if (result.__v === 0)  {
                      //__v is the version of the document
                      stats.added++;
                  }
              }

          });
    }

    callback(null, stats)
}
async function asyncAddThesis(id, title, supervisors, vacancies, location, courses,
                              observations, objectives, status, requirements, areas,
                              clicks, type, fenixCourse, lastModified, callback) {
    Thesis.find(
        {
            id: id
        }, (err, thesis) =>   {
            if (err)  {
                return new Error(err);
            }
            if (thesis[0]) {
                if (thesis[0].title === title && thesis[0].supervisors === supervisors &&
                    thesis[0].vacancies === vacancies && thesis[0].observations === observations &&
                    thesis[0].objectives === objectives && thesis[0].status === status && thesis[0].requirements === requirements
                    && thesis[0].areas=== areas)  {
                    return;
                }

                if (thesis[0].title !== title) {
                    Thesis.updateOne({ id: id }, { $set: { title: title }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].supervisors !== supervisors) {
                    Thesis.updateOne({ id: id }, { $set: { supervisors: supervisors }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].vacancies !== vacancies) {
                    Thesis.updateOne({ id: id }, { $set: { vacancies: vacancies }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].observations !== observations) {
                    Thesis.updateOne({ id: id }, { $set: { observations: observations }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].objectives !== objectives) {
                    Thesis.updateOne({ id: id }, { $set: { objectives: objectives }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].status !== status) {
                    Thesis.updateOne({ id: id }, { $set: { status: status }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].requirements !== requirements) {
                    Thesis.updateOne({ id: id }, { $set: { requirements: requirements }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }

                if (thesis[0].areas !== areas) {
                    Thesis.updateOne({ id: id }, { $set: { areas: areas }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
            } else    {

                let newThesis = new Thesis({
                    id: id,
                    title: title,
                    supervisors: supervisors,
                    vacancies: vacancies,
                    location: location,
                    courses: courses,
                    observations: observations,
                    objectives: objectives,
                    status: status,
                    requirements: requirements,
                    areas: areas,
                    type: type,
                    fenixCourse: fenixCourse,
                    clicks: clicks,
                    lastModified: lastModified
                });

                newThesis.save((err,result)=>   {
                    console.log(err);
                    if (err)  {
                        return new Error(err);
                    } else    {
                        return result;
                    }
                });
            }

        });
}

function addThesisArray(thesesArray, callback) {
    const NumberTheses = thesesArray.theses.length;
    let stats = {
        loaded: NumberTheses,
        unchanged: 0,
        modified: 0,
        added: 0
    };
    for (let i = 0; i < NumberTheses; i++) {
        addThesis(thesesArray.theses[i].id, thesesArray.theses[i].title, thesesArray.theses[i].supervisors,
            thesesArray.theses[i].vacancies, thesesArray.theses[i].location, thesesArray.theses[i].courses,
            thesesArray.theses[i].observations, thesesArray.theses[i].objectives, thesesArray.theses[i].status,
            thesesArray.theses[i].requirements, thesesArray.theses[i].areas, 0, thesesArray.theses[i].type,
            new Date(), (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    if (result.nModified === 1)   {
                        stats.modified++;
                    } else if (result.__v === 0)  {
                        //__v is the version of the document
                        stats.added++;
                    }
                }

            });
    }

}


async function asyncAddThesisSpecialization(id, title, supervisors, vacancies, location, courses,
                              observations, objectives, status, requirements, areas, specializationAreas,
                              clicks, type, fenixCourse, lastModified, callback) {
    Thesis.find(
        {
            id: id
        }, (err, thesis) =>   {
            if (err)  {
                return new Error(err);
            }
            if (thesis[0]) {
                if (thesis[0].title === title && thesis[0].supervisors === supervisors &&
                    thesis[0].vacancies === vacancies && thesis[0].observations === observations &&
                    thesis[0].objectives === objectives && thesis[0].status === status && thesis[0].requirements === requirements
                    && thesis[0].areas=== areas)  {
                    return;
                }

                if (thesis[0].title !== title) {
                    Thesis.updateOne({ id: id }, { $set: { title: title }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].supervisors !== supervisors) {
                    Thesis.updateOne({ id: id }, { $set: { supervisors: supervisors }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].vacancies !== vacancies) {
                    Thesis.updateOne({ id: id }, { $set: { vacancies: vacancies }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].observations !== observations) {
                    Thesis.updateOne({ id: id }, { $set: { observations: observations }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].objectives !== objectives) {
                    Thesis.updateOne({ id: id }, { $set: { objectives: objectives }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].status !== status) {
                    Thesis.updateOne({ id: id }, { $set: { status: status }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
                if (thesis[0].requirements !== requirements) {
                    Thesis.updateOne({ id: id }, { $set: { requirements: requirements }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }

                if (thesis[0].areas !== areas) {
                    Thesis.updateOne({ id: id }, { $set: { areas: areas }}, (err,result) =>  {
                        if (err)  {
                            return new Error(err);
                        } else    {
                            return result;
                        }
                    });
                }
            } else    {

                let newThesis = new Thesis({
                    id: id,
                    title: title,
                    supervisors: supervisors,
                    vacancies: vacancies,
                    location: location,
                    courses: courses,
                    observations: observations,
                    objectives: objectives,
                    status: status,
                    requirements: requirements,
                    areas: areas,
                    specializationAreas: specializationAreas,
                    type: type,
                    fenixCourse: fenixCourse,
                    clicks: clicks,
                    lastModified: lastModified
                });

                newThesis.save((err,result)=>   {
                    console.log(err);
                    if (err)  {
                        return new Error(err);
                    } else    {
                        return result;
                    }
                });
            }

        });
}

function addThesisArray(thesesArray, callback) {
    const NumberTheses = thesesArray.theses.length;
    let stats = {
        loaded: NumberTheses,
        unchanged: 0,
        modified: 0,
        added: 0
    };
    for (let i = 0; i < NumberTheses; i++) {
        addThesis(thesesArray.theses[i].id, thesesArray.theses[i].title, thesesArray.theses[i].supervisors,
          thesesArray.theses[i].vacancies, thesesArray.theses[i].location, thesesArray.theses[i].courses,
          thesesArray.theses[i].observations, thesesArray.theses[i].objectives, thesesArray.theses[i].status,
          thesesArray.theses[i].requirements, thesesArray.theses[i].areas, 0, thesesArray.theses[i].type,
          new Date(), (err, result) => {
              if (err) {
                  console.log(err);
                  reject(err);
              } else {
                  if (result.nModified === 1)   {
                      stats.modified++;
                  } else if (result.__v === 0)  {
                      //__v is the version of the document
                      stats.added++;
                  }
              }

          });
    }

    callback(null, stats)
}

function updateThesis(id, description, requirements,
                      date_beginning, date_end,
                      salary, observations, vacancies,
                      link, lastModifiedDate, callback) {



    Proposal.findByIdAndUpdate(id, update, options, callback);
}

function getNumberOfThesis(callback) {
    Thesis.count(callback);
}

function getThesisByArea(area, callback) {
    Thesis.find(
      {
          area: { $in: area }
      }
      , callback)
}

async function getThesis() {
    let query = Thesis.find({});
    let docs = await query.exec();
    return docs;
}

async function getThesisById(id) {
    let query = Thesis.findOne({id: id});
    let docs = await query.exec();
    return docs;
}

async function getThesisRecomendation(areas) {
    let thesisIdSet = new Set();
    for (let area of areas)  {
        let query = Thesis.find({specializationAreas: {$eq: area}});
        var docs = await query.exec();
        for (let thesis of docs)    {
            if (!(thesisIdSet.has(thesis.id))) {
                thesisIdSet.add(thesis.id);
            }
        }
    }


    return thesisIdSet;
}

async function getThesisRecomendationByAdvisor(advisor) {
    let thesisIdSet = new Set();
        let query = Thesis.find({supervisors: {$regex: advisor}});
        var docs = await query.exec();
        for (let thesis of docs)    {
            thesisIdSet.add(thesis.id);
        }
        return thesisIdSet;
}

async function getThesesByFenixCourse(course) {
        let query = Thesis.find({fenixCourse: {$regex: course}});
        return await query.exec();
}

async function getThesisRecomendationByAreaAndAdvisor(areas, advisor) {
    let thesisIdSet = new Set();
    for (let area of areas) {
        let query = Thesis.find({$and: [{specializationAreas: {$eq: area}}, {supervisors: {$regex: advisor}}]});
        let docs = await query.exec();
        for (let thesis of docs) {
            //Thesis is not repeated
            if (!(thesisIdSet.has(thesis.id))) {
                thesisIdSet.add(thesis.id);
            }
        }
    }
    return thesisIdSet;
}

async function incrementClicks(id) {
    let query = Thesis.findOneAndUpdate({id: id}, {$inc: {'clicks': 1}});
    let docs = await query.exec();
    return docs;
}


function removeThesis(){
  
}