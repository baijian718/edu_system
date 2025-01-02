<?php

namespace Database\Factories;

use App\Models\StStudent;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StStudent>
 */
class StStudentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StStudent::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
//        return [
//            'name' => $this->faker->name,
//            'st_sn' => $this->faker->unique()->randomNumber(8),
//        ];
        return [
            'name' => '11',
            'st_sn' => '11111111',
        ];
    }
}
