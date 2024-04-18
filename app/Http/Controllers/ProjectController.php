<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = ProjectResource::collection(Project::all());
        //return $projects;
        return Inertia::render('Projects/Index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $skills = Skill::all();
        return Inertia::render('Projects/Create', compact('skills'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'min:3'],
            'image' => ['required', 'image'],
            'project_url' => ['required',],
            'skill_id' => ['required',],
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('projects');
            $data = $request->except('image');
            $data['image'] = $image;
            Project::create($data);
            return Redirect::route('projects.index');
        }

        return Redirect::back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        $skills = Skill::all();
        return Inertia::render('Projects/Edit',compact('project','skills'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $image = $project->image;
        $request->validate([
            'name' => ['required', 'min:3'],
            'project_url' => ['required'],
            'skill_id' => ['required',],
        ]);

        if ($request->hasFile('image')) {
            Storage::delete('$project->image');
            $image=$request->file('image')->store('projects');
        }
        $project->update([
            'name' => $request->name,
            'image' =>$request->image ,
            'project_url' =>$request->project_url ,
            'skill_id' => $request->skill_id,
        ]);

        return redirect()->route('projects.index')->with('message',"Updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        Storage::delete($project->image);
        $project->delete();
    }
}
